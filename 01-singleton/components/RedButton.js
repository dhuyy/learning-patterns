import React from 'react';

import { counter } from '../singleton/SingletonCounter';

const RedButton = ({ onClickCallback }) => {
  const increment = () => {
    counter.increment();

    onClickCallback();
  };

  return <button onClick={() => increment()}>Red Button</button>;
};

export default RedButton;
