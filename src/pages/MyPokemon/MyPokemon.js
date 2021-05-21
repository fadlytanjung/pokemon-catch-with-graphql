import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeConfirm, deletePokemon, openConfirm } from './actions';
import { Link } from 'react-router-dom';
import Button from '../../components/elements/Button';
import ModalConfirmation from '../../components/elements/ModalConfirmation';
import MainBase from '../../components/layouts/MainBase';
import Typography from '../../components/elements/Typography';
import styles from './styles.scoped.css';
import TrashJs from '../../components/icons/TrashJs';

export default function MyPokemon() {
  const dispatch = useDispatch();
  const [itemDelete, setItemDelete] = useState(null);
  const [indexDelete, setIndexDelete] = useState(null);
  const { popup } = useSelector(s => s.popup);
  const { list_my_pokemons } = useSelector(s => s.mypokemon);

  const onConfirm = () => {
    if (itemDelete !== null && indexDelete !== null) {
      const newData = list_my_pokemons.filter(el => el.alias !== itemDelete);
      dispatch(deletePokemon(newData));
      setItemDelete(null);
    } else {
      dispatch(closeConfirm());
    }
  };

  const removePokemon = (item, id) => {
    setItemDelete(item);
    setIndexDelete(id);
    dispatch(openConfirm({
      title: 'Confirmation',
      subtitle: 'Are you sure to delete this?',
      open: true,
    }));
  };
  const onCancel = () => {
    dispatch(closeConfirm());
  };
  return (
    <MainBase back label={'My Pokemon'}>
      <section>
        <div className={styles.wrapper}>
          <div className={styles.headline}>
            <Typography tag="h3" variant="headline-medium" weight="medium">Total ({list_my_pokemons.length})</Typography>
          </div>
          {!list_my_pokemons.length > 0 ? <Typography tag="h3" variant="headline-medium" weight="medium">You don't have pokemon</Typography> :
            <div className={styles.item}>
              {
                list_my_pokemons.map((item, id) => (<div className={styles.cardItem} key={id}>
                  <div className={styles.cardContent}>
                    <Link to={`/pokemon/${item.name}`}>
                      <img src={item.sprites && item.sprites.front_default} />
                    </Link>
                    <div className={styles.desc}>
                      <Link to={`/pokemon/${item.name}`}>
                        <Typography tag="h4" variant="headline-small" weight="medium">
                          Nickname: {item.alias}
                        </Typography>
                      </Link>
                      <Typography tag="p" variant="caption" weight="light">
                        Name: {item.name}
                      </Typography>
                      <br />
                      <Button icon={TrashJs} onClick={() => removePokemon(item.alias, id)} variant="outline" width={'100%'} />
                    </div>
                  </div>
                </div>))
              }
              <div className={styles.cardItem} style={{ boxShadow: 'none' }} />
            </div>}
        </div>
        {
          popup &&
          <ModalConfirmation
            onCancel={onCancel}
            onConfirm={onConfirm}
            {...popup}
          />
        }
      </section>
    </MainBase>
  );
}
