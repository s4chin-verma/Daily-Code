const first = () => {
  console.log('first');
};

const second = () => {
  console.log('second');
};

const third = () => {
  console.log('third');
};

const all = (first, second, third) => {
  first();
  second();
  third();
};

all(first, second, third);
console.log('sachin');
