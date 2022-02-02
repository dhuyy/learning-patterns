let count = 0;

const counter = {
  getCount() {
    return count;
  },
  
  increment() {
    ++count;
  },

  decrement() {
    --count;
  },
};

Object.freeze(counter);
export { counter };
