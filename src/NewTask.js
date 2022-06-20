import React from 'react';
import { Container, FormLabel, TextField, Stack, Button } from '@mui/material';

const NewTask = () => {
  return (
    <Container align='center'>
      <Stack spacing={2} align='left' sx={{ width: '40%', marginTop: 5 }}>
        <FormLabel>New Task</FormLabel>
        <TextField
          id='outlined-basic'
          label='Enter new task'
          variant='outlined'
          size='small'
        />
        <FormLabel>Description</FormLabel>
        <TextField
          id='outlined-basic'
          label='Enter task description'
          variant='outlined'
          size='small'
        />
        <FormLabel>Priority</FormLabel>
        <TextField
          id='outlined-basic'
          label='Enter task priority'
          variant='outlined'
          size='small'
        />
        <FormLabel>Due Date</FormLabel>
        <TextField
          id='outlined-basic'
          label='Enter due date mm-dd-yyyy'
          variant='outlined'
          size='small'
        />
      </Stack>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 5,
        }}
      >
        <Button variant='outlined'>Cancel</Button>
        <Button variant='contained'>Create</Button>
      </Container>
    </Container>
  );
};

export default NewTask;
