import React from 'react';
import Box from '@mui/material/Box';

const Array03 = () => {
  const myArray = [1, 2, 3, 4, 5, 6];
  const [one, two, ...others] = myArray;

  return (
    <Box sx={{ marginTop: 10 }}>
      {others.map((item) => {
        return <p key={item}>{item}</p>;
      })}
      ;
    </Box>
  );
};

export default Array03;
