import React from 'react';

import { counter } from '../singleton/SingletonCounter';

const BarButton = ({ onClickCallback }) => {
  const increment = () => {
    counter.increment();

    onClickCallback();
  };

  return <button onClick={() => increment()}>Bar Button</button>;
};

export default BarButton;
