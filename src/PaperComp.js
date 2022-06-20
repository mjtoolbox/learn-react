import React from 'react';
import {
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Chip,
  Checkbox,
  Typography,
  Grid,
  Item,
} from '@mui/material';

const PaperComp = () => {
  return (
    <Paper elevation={3}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBottom: 1,
                backgroundColor: 'lightgray',
              }}
            >
              <Chip
                label='primary'
                size='small'
                color='primary'
                variant='outlined'
                sx={{ marginRight: 2 }}
              />
              <Typography sx={{ fontSize: 14, marginRight: 5 }}>
                Somethihgn
              </Typography>
              <Typography sx={{ fontSize: 14 }}>01/01/2022</Typography>
              <Checkbox size='small'></Checkbox>
            </Grid>
          </Grid>
          <Grid>
            <Grid item>
              <Typography color='text.secondary'>
                Content of something
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size='small'>Click</Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default PaperComp;
