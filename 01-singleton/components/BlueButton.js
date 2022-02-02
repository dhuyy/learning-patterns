import React from 'react';

import { counter } from '../singleton/SingletonCounter';

const BlueButton = ({ onClickCallback }) => {
  const increment = () => {
    counter.increment();

    onClickCallback();
  };

  return <button onClick={() => increment()}>Blue Button</button>;
};

export default BlueButton;
