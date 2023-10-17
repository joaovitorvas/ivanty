import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export const SearchButton = () => {
  return (
    <Stack spacing={2} sx={{ marginTop: 2, marginLeft: 2, marginRight: 2, color: '#7B87C2', borderRadius: 6, background: '#353535', height: 50, textAlign: 'center', fontFamily: 'roboto'}}>
    <Autocomplete
  id="free-solo-demo"
  freeSolo
  options={artes.map((option) => option.title)}
  renderInput={(params) => (
    <TextField 
      {...params} 
      label="O que você está procurando? " 
      InputLabelProps={{
        ...params.InputLabelProps,
        style: { color: '#fff' },
      }}
      InputProps={{
        ...params.InputProps,
        style: { color: '#fff' }
      }}
    />
  )}
/>
  </Stack>



  );
}

const artes = [
  { title: 'Mona Lisa', artist: 'Leonardo da Vinci', year: 1517 },
  { title: 'A Noite Estrelada', artist: 'Vincent van Gogh', year: 1889 },
  { title: 'O Grito', artist: 'Edvard Munch', year: 1893 },
  { title: 'Guernica', artist: 'Pablo Picasso', year: 1937 },
  { title: 'O Beijo', artist: 'Gustav Klimt', year: 1908 },
  { title: 'O Nascimento de Vênus', artist: 'Sandro Botticelli', year: 1486 },
  { title: 'A Liberdade Guiando o Povo', artist: 'Eugène Delacroix', year: 1830 },
  { title: 'O Jardim das Delícias Terrenas', artist: 'Hieronymus Bosch', year: 1515 },
  { title: 'A Ronda da Noite', artist: 'Rembrandt van Rijn', year: 1642 },
  { title: 'A Persistência da Memória', artist: 'Salvador Dalí', year: 1931 }
];
