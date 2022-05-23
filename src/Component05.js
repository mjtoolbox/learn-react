import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Component05 = () => {
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const myList = [
    {
      id: '625c574e69ac6cb2fd3d219a',
      description: 'shopping',
      created: '2022-04-17',
      priority: 'string',
      isdone: false,
      due: '2022-04-17',
      username: 'string',
      items: [
        {
          description: 'banana',
          isdone: false,
        },
      ],
    },
    {
      id: '625c5de861f4afdb79bd2a2d',
      description: 'string',
      created: '2022-04-17',
      priority: 'string',
      isdone: true,
      due: '2022-04-17',
      username: 'string',
      items: [
        {
          description: 'item1',
          isdone: false,
        },
        {
          description: 'item2',
          isdone: false,
        },
      ],
    },
  ];

  const getList = () => {
    setTodolist(myList);
  };

  // Looping over array of items, use map() method.

  return (
    <Container
      maxWidth='sm'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: 'lightgray',
      }}
    >
      <List>
        {todolist.map((row) => {
          return (
            <Card sx={{ margin: 3 }} key={row.description}>
              <CardContent>
                <Chip label='primary' color='primary' />
                <ListItemText primary={row.description} secondary={row.due} />
              </CardContent>
            </Card>
          );
        })}
      </List>
    </Container>
  );
};

export default Component05;
