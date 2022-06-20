import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
const Listt = () => {
  const [journallist, setJournallist] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const mylist = [
    {
      id: '6282e9d1d8763b7923ae21bf',
      title: 'journal',
      date: '2022-05-17',
      content: 'string',
      author: 'string',
      emotion: 'string',
      tag: 'string',
      weather: 'string',
      ispublic: true,
    },
    {
      id: '6282e9e2d8763b7923ae21c0',
      title: 'second journal',
      date: '2022-05-17',
      content: 'string',
      author: 'string',
      emotion: 'string',
      tag: 'string',
      weather: 'string',
      ispublic: true,
    },
  ];

  const getList = () => {
    setJournallist(mylist);
    console.log(journallist);
  };
  return (
    <List>
      {journallist.map((row) => {
        return (
          <ListItem key={row.id}>
            <ListItemText primary={row.title} secondary={row.weather} />
          </ListItem>
        );
      })}
    </List>
  );
};
export default Listt;
