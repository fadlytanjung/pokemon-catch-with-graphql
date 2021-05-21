import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { emptyData, fetchData } from './actions';
import Button from '../../components/elements/Button';
import Typography from '../../components/elements/Typography';
import MainBase from '../../components/layouts/MainBase';
import styles from './styles.scoped.css';

const GET_DATA_LIST = gql`
   query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        prevOffset
    	  nextOffset
        status
        message
        results {
          url
          name
          image
        }
      }
    }
`;
function Home() {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const { contents } = useSelector(s => s.home);
  const { list_my_pokemons } = useSelector(s=>s.mypokemon);
  const { data, error, loading, fetchMore } = useQuery(GET_DATA_LIST, {
    variables: {
      limit: 10,
      offset
    },
    fetchPolicy: 'cache-and-network',
    // onSuccess: setResults
  });
  let lastPage;
  if (data) {
    lastPage = data.pokemons.next===null;
  }
  const textLoading = loading ? 'Loading ...' : 'Load More';

  useEffect(() => {
    const newData = [...contents, ...data ? data.pokemons.results : []];
    dispatch(fetchData(newData));
  }, [data]);

  useEffect(()=>{
    dispatch(emptyData());
  },[]);
  const loadMore = () => {
    fetchMore({
      variables: {
        offset,
        limit: 10
      },
    }).then(fetchMoreResult => {
      // Update variables.limit for the original query to include
      // the newly added retults items.
      setOffset(fetchMoreResult.data.pokemons.nextOffset);
    });
  };

  const renderOwnTotalPokemon = (item) =>{
    const totalOwned = list_my_pokemons.filter(el=>el.name === item.name);
    return totalOwned.length > 0 ? `you owned ${totalOwned.length}` :  ``;
  };
  return (
    <MainBase>
      <div className={styles.wrapper}>
        <div className={styles.headline}>
          <Typography tag="h3" variant="headline-medium" weight="medium">Pokemon Lists ({data && data.pokemons.count})</Typography>
        </div>
        {error ? <p>Failed to load data : {error.message}</p> :
          <div className={styles.item}>
            {
              contents.map((item, id) => (<Link className={styles.cardItem} key={id} to={`/pokemon/${item.name}`}>
                <div className={styles.cardContent}>
                  <img src={item.image} />
                  <div className={styles.desc}>
                    <Typography tag="h4" variant="headline-small" weight="light">
                      {item.name}
                    </Typography>
                    {renderOwnTotalPokemon(item) && <Typography tag="p" variant="caption" weight="semibold">{renderOwnTotalPokemon(item)}</Typography>}
                  </div>
                </div>
              </Link>))
            }
            <div className={styles.cardItem} style={{ boxShadow: 'none' }} />
          </div>}
        <div className={styles.loadMore}>
          {(!lastPage && contents.length > 0) &&  <Button onClick={() => loadMore()} variant="outline">{textLoading}</Button>}
        </div>
      </div>
    </MainBase>
  );
}

export default Home;
