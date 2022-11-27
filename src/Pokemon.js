import React from 'react';
import { useParams } from 'react-router-dom';

const Pokemon = () => {
  // const { match } = props;
  // const { params } = match;
  // const { pokemonId } = params;
  const { pokemonId } = useParams();
  return <div>{`This is pokemon page for pokemon ${pokemonId}`}</div>;
};

export default Pokemon;
