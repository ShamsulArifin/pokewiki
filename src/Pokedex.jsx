import React from 'react';
import { AppBar, Toolbar, Grid, Card, CardContent } from '@mui/material';

function getPokemonCard() {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardContent>Hiiiiiiiiiiiiiiiiiiiii</CardContent>
      </Card>
    </Grid>
  );
}

export default function Pokedex() {
  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Grid
        container
        spacing={2}
        paddingTop={'20px'}
        paddingLeft={'50px'}
        paddingRight={'50px'}
      >
        {getPokemonCard()}
      </Grid>
    </>
  );
}
