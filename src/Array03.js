import React from 'react';

const Array03 = () => {
  const myArray = [1, 2, 3, 4, 5, 6];
  const [one, two, ...others] = myArray;

  return others.map((item) => <p>{item}</p>);
};

export default Array03;
