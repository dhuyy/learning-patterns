import React, { Fragment, useState } from 'react';

import BlueButton from './BlueButton';
import RedButton from './RedButton';
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
      <BlueButton onClickCallback={onClickHandler}></BlueButton>
      <RedButton onClickCallback={onClickHandler}></RedButton>
    </Fragment>
  );
};

export default App;
