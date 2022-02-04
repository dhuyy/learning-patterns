import React from 'react';

import { counter } from '../singleton/SingletonCounter';

const FooButton = ({ onClickCallback }) => {
  const increment = () => {
    counter.increment();

    onClickCallback();
  };

  return <button onClick={() => increment()}>Foo Button</button>;
};

export default FooButton;
