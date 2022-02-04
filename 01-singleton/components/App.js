import React, { Fragment, useState } from 'react';

import FooButton from './FooButton';
import BarButton from './BarButton';
import { counter } from '../singleton/SingletonCounter';

const App = () => {
  const [count, setCount] = useState(counter.getCount());

  const onClickHandler = () => {
    setCount(counter.getCount());
  };

  return (
    <Fragment>
      <h1>{count}</h1>
      <hr />
      <FooButton onClickCallback={onClickHandler}></FooButton>
      <BarButton onClickCallback={onClickHandler}></BarButton>
    </Fragment>
  );
};

export default App;
