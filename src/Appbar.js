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
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';

const Appbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log();
  };

  return (
    <Container sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
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
            <MenuItem component={Link} to='/viewtodo' onClick={handleClose}>
              View Todo
            </MenuItem>
          </Menu>
          <Typography
            variant='h6'
            component='div'
            align='center'
            sx={{ flexGrow: 1 }}
          >
            ToDoApp
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Container>
  );
};

export default Appbar;
