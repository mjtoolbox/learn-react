import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React from 'react';
import PaperComp from './PaperComp';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ViewTodo = () => {
  return (
    <Box>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <IconButton
          size='medium'
          edge='end'
          color='primary'
          component={Link}
          to='/newtask'
        >
          <AddIcon />
        </IconButton>
      </Container>
      <Container
        maxWidth='sm'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 0,
          padding: 2,
          backgroundColor: 'lightgray',
          gap: 2,
        }}
      >
        <PaperComp />
      </Container>
    </Box>
  );
};

export default ViewTodo;
