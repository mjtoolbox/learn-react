import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Routes, Route, Link } from 'react-router-dom';
import Component05 from './Component05';
import Query02 from './Query02';
import Home from './Home';
import Array03 from './Array03';
import List04 from './List04';
import Component01 from './Component01';

const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <IconButton
            size='medium'
            edge='start'
            color='inherit'
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem component={Link} to='/card' onClick={handleClose}>
              Card
            </MenuItem>
            <MenuItem component={Link} to='/list' onClick={handleClose}>
              List
            </MenuItem>
            <MenuItem component={Link} to='/array' onClick={handleClose}>
              Array
            </MenuItem>
          </Menu>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            ToDoApp
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Component01 />} />
        <Route path='/query' element={<Query02 />} />
        <Route path='/array' element={<Array03 />} />
        <Route path='/list' element={<List04 />} />
        <Route path='/card' element={<Component05 />} />
      </Routes>
    </Box>
  );
};

export default App;
