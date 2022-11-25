import React, { useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function App() {
  const [pokemon, setPokemon] = useState('pikachu');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState('');

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      console.log(res);
      console.log('result', pokemonData);
    } catch (e) {
      console.log('errors', e);
    }
  };

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handdleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  return (
    <div className="App">
      <h1>Wellcome to PokeWiki</h1>
      <form onSubmit={handdleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter Pokemon Name"
          />
        </label>
      </form>
      {pokemonData.map((data) => {
        return (
          <div className="container">
            <Card elevation={3} sx={{ padding: 2, backgroundColor: '#FCF3CF' }}>
              <Card
                sx={{ padding: 2, backgroundColor: '#E5E7E9' }}
                elevation={3}
              >
                <ImageList cols={2} width="50%" height="50%">
                  <ImageListItem>
                    <img src={data.sprites.other['home'].front_default} />
                  </ImageListItem>
                  <ImageListItem>
                    <img src={data.sprites.other['home'].front_shiny} />
                  </ImageListItem>
                  {data.sprites['front_female'] && (
                    <ImageListItem>
                      <img src={data.sprites.other['home'].front_female} />
                    </ImageListItem>
                  )}
                  {data.sprites['front_shiny_female'] && (
                    <ImageListItem>
                      <img
                        src={data.sprites.other['home'].front_shiny_female}
                      />
                    </ImageListItem>
                  )}
                </ImageList>
              </Card>

              <Card
                sx={{ padding: 2, backgroundColor: 'orange' }}
                elevation={3}
              >
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Height</TableCell>
                        <TableCell align="center">Weight</TableCell>
                        <TableCell align="center">Number of Battle</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="center">{pokemonType}</TableCell>
                        <TableCell align="center">
                          {Math.round(data.height * 3.9)} "
                        </TableCell>
                        <TableCell align="center">
                          {Math.round(data.weight)}
                        </TableCell>
                        <TableCell align="center">
                          {data.game_indices.length}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
