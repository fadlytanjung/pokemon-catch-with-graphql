import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { fetchData, closeConfirm, openConfirm } from './actions';
import { catchPokemon } from '../MyPokemon/actions';
import Button from '../../components/elements/Button';
import MainBase from '../../components/layouts/MainBase';
import ModalConfirmation from '../../components/elements/ModalConfirmation';
import Typography from '../../components/elements/Typography';
import Textfield from '../../components/elements/Textfield';
import styles from './styles.scoped.css';

const GET_DETAIL = gql`
   query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;
function Detail(){
  const dispatch = useDispatch();
  const [succesStatus, setSuccesStatus] = useState(false);
  const [alias, setAlias] = useState('');
  const [errorField, setError] = useState('');
  const [helper, setHelper] = useState('');

  const { content, content: { sprites, name, types, moves } } = useSelector(s => s.detail);
  const { list_my_pokemons } = useSelector(s => s.mypokemon);
  const { popup } = useSelector(s => s.popup);
  const { paramsId } = useParams();
  const { data } = useQuery(GET_DETAIL, {
    variables: {
      name: paramsId,
    },
  });
  useEffect(() => {
    dispatch(fetchData(data ? data.pokemon : {}));
  }, [data]);

  const catchThePokemon = () => {
    const succesStatusTemp = Math.random() < 0.5;
    setSuccesStatus(succesStatusTemp);
    if (succesStatusTemp) {
      dispatch(openConfirm({
        title: 'Success',
        subtitle: 'Succes to catch pokemon',
        buttonConfirm: 'Add pokemon',
        open: true,
      }));
    } else {
      dispatch(openConfirm({
        title: 'Failed',
        subtitle: 'Failed to catch pokemon. Try Again!!!',
        open: true,
      }));
    }
  };
  const handleChange = (e) => {
    setAlias(e.target.value);
  };
  const onConfirm = () => {
    const checkAlias = list_my_pokemons.find(el => el.alias === alias);
    if (checkAlias) {
      setError('Nickname has already exist');
      setHelper('Nickname has already exist');
    } else {
      dispatch(catchPokemon({
        ...content,
        alias: alias,
      }));
      setSuccesStatus(false);
      setAlias('');
      dispatch(openConfirm({
        title: 'Success',
        subtitle: 'Succes add pokemon to my pokemon list',
        open: true,
      }));
    }
  };
  const onCancel = () => {
    dispatch(closeConfirm());
  };
  return (
    <MainBase back label={'Pokemon Detail'}>
      <div className={styles.wrapper}>
        <img src={(sprites && sprites.front_default) && sprites.front_default} width={'100%'} />
        <div className={styles.desc}>
          <Typography tag="h3" variant="headline-medium" weight="semibold">{name}</Typography>
          <Typography tag="h4" variant="caption">{name && 'Types:'}</Typography>
          {
            (types && types.length > 0) && types.map((el, id) => (<Typography key={id} tag="p" variant="caption">- {el.type.name}</Typography>))
          }
          <Typography tag="h4" variant="caption">{name && 'Moves:'}</Typography>
          <div className={styles.chipWrapper}>
            {
              (moves && moves.length > 0) && moves.map((el, id) => (
                <div className={styles.chip} key={id}>
                  <Typography tag="p" variant="caption">{el.move.name}</Typography>
                </div>
              ))
            }
          </div>
        </div>
        <div className={styles.catchWrapper}>
          <Button onClick={() => catchThePokemon()} type="submit" width="100%">Catch Pokemon</Button>
        </div>
        {
          popup &&
          <ModalConfirmation
            {...popup}
            onCancel={onCancel}
            onConfirm={succesStatus && onConfirm}
          >
            {succesStatus && <div style={{ marginTop: 30 }}>
              <Textfield error={errorField} helper={helper} onChange={handleChange} title="Set Pokemon Nickname" value={alias} width="100%" />
            </div>}
          </ModalConfirmation>
        }
      </div>
    </MainBase>
  );
}

export default Detail;
