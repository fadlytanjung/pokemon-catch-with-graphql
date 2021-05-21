import React, { lazy, Suspense } from 'react';
import LazyFallback from '../components/elements/LazyFallback';

const Suspensed = (Element) => function suspense(props) {
  return (
    <Suspense fallback={<LazyFallback />}>
      <Element {...props} />
    </Suspense>
  );
};

export default {
  Error404: Suspensed(lazy(() => import('./Error404'))),
  Detail: Suspensed(lazy(() => import('./Detail'))),
  Home: Suspensed(lazy(() => import('./Home'))),
  MyPokemon: Suspensed(lazy(() => import('./MyPokemon'))),
};
