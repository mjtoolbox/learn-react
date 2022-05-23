import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const List04 = () => {
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios
      .get('http://localhost:8000/todos')
      .then((response) => {
        setTodolist(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  };

  // Looping over array of items, use map() method.

  return (
    <List>
      {todolist.map((row) => {
        return (
          <ListItem>
            <ListItemText primary={row.description} secondary={row.due} />
          </ListItem>
        );
      })}
    </List>
    // <List>
    //   {todolist.map((row) => {
    //     return (
    //       <ListItem>
    //         <Card sx={{ minWidth: 275 }}>
    //           <CardContent>
    //             <ListItemText primary={row.description} secondary={row.due} />
    //           </CardContent>
    //         </Card>
    //       </ListItem>
    //     );
    //   })}
    // </List>
  );
};

export default List04;
