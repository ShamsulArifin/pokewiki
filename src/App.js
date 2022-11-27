import './App.css';
import React from 'react';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  // const [pokemon, setPokemon] = useState('pikachu');
  // const [pokemonData, setPokemonData] = useState([]);
  // const [pokemonType, setPokemonType] = useState('');

  // const getPokemon = async () => {
  //   const toArray = [];
  //   try {
  //     const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  //     const res = await axios.get(url);
  //     toArray.push(res.data);
  //     setPokemonType(res.data.types[0].type.name);
  //     setPokemonData(toArray);
  //     console.log(res);
  //     console.log('result', pokemonData);
  //   } catch (e) {
  //     console.log('errors', e);
  //   }
  // };

  // const handleChange = (e) => {
  //   setPokemon(e.target.value.toLowerCase());
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   getPokemon();
  // };

  return (
    <Routes>
      <Route exact={true} path="/" element={<Pokedex />} />
      <Route exact={true} path="/:pokemonId" element={<Pokemon />} />
    </Routes>
    // <div className="App">
    //   <Box sx={{ flexGrow: 1 }}>
    //     <AppBar position="static" sx={{ background: '#790000' }}>
    //       <Toolbar>
    //         <IconButton
    //           size="large"
    //           edge="start"
    //           color="inherit"
    //           aria-label="menu"
    //           sx={{ mr: 2 }}
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Typography variant="h6" sx={{ flexGrow: 1 }}>
    //           PokeWiki
    //         </Typography>
    //       </Toolbar>
    //     </AppBar>
    //   </Box>
    //   <Grid container justifyContent="center" padding={2}>
    //     <Card padding={20} elevation={10}>
    //       <Grid container justifyContent="center">
    //         <Typography variant="h6" fontSize="30px">
    //           Wellcome to PokeWiki
    //         </Typography>
    //       </Grid>
    //       <form onSubmit={handleSubmit}>
    //         <label>
    //           <input
    //             type="text"
    //             onChange={handleChange}
    //             placeholder="Enter Pokemon Name"
    //           />
    //         </label>
    //       </form>
    //     </Card>
    //   </Grid>
    //   {pokemonData.map((data) => {
    //     return (
    //       <div className="container">
    //         <Card elevation={3} sx={{ padding: 2, backgroundColor: '#FCF3CF' }}>
    //           <Card
    //             sx={{ padding: 2, backgroundColor: '#E5E7E9' }}
    //             elevation={3}
    //           >
    //             <ImageList cols={2} width="50%" height="50%">
    //               <ImageListItem>
    //                 <img
    //                   src={data.sprites.other['home'].front_default}
    //                   alt="front"
    //                 />
    //               </ImageListItem>
    //               <ImageListItem>
    //                 <img
    //                   src={data.sprites.other['home'].front_shiny}
    //                   alt="front_shiny"
    //                 />
    //               </ImageListItem>
    //               {data.sprites['front_female'] && (
    //                 <ImageListItem>
    //                   <img
    //                     src={data.sprites.other['home'].front_female}
    //                     alt="front_female"
    //                   />
    //                 </ImageListItem>
    //               )}
    //               {data.sprites['front_shiny_female'] && (
    //                 <ImageListItem>
    //                   <img
    //                     src={data.sprites.other['home'].front_shiny_female}
    //                     alt="front_shiny_female"
    //                   />
    //                 </ImageListItem>
    //               )}
    //             </ImageList>
    //           </Card>

    //           <Card
    //             sx={{ padding: 2, backgroundColor: 'orange' }}
    //             elevation={3}
    //           >
    //             <TableContainer component={Paper}>
    //               <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //                 <TableHead>
    //                   <TableRow>
    //                     <TableCell align="center">Type</TableCell>
    //                     <TableCell align="center">Height</TableCell>
    //                     <TableCell align="center">Weight</TableCell>
    //                     <TableCell align="center">Number of Battle</TableCell>
    //                   </TableRow>
    //                 </TableHead>
    //                 <TableBody>
    //                   <TableRow>
    //                     <TableCell align="center">{pokemonType}</TableCell>
    //                     <TableCell align="center">
    //                       {Math.round(data.height * 3.9)} "
    //                     </TableCell>
    //                     <TableCell align="center">
    //                       {Math.round(data.weight)}
    //                     </TableCell>
    //                     <TableCell align="center">
    //                       {data.game_indices.length}
    //                     </TableCell>
    //                   </TableRow>
    //                 </TableBody>
    //               </Table>
    //             </TableContainer>
    //           </Card>
    //         </Card>
    //       </div>
    //     );
    //   })}
    // </div>
  );
}
