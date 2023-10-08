import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export const SearchButton = () => {
  return (
    <Stack spacing={2} sx={{ marginTop: 3.2, marginLeft: 1, color: '#7B87C2', borderRadius: 6, background: '#353535', height: 50, textAlign: 'center', fontFamily: 'roboto'}}>
    <Autocomplete
  id="free-solo-demo"
  freeSolo
  options={artes.map((option) => option.title)}
  renderInput={(params) => (
    <TextField 
      {...params} 
      label="Pesquisar" 
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
    { title: 'Composição número 5', artist: 'Jackson Pollock', year: 1948 },
    { title: 'A Traição das Imagens', artist: 'René Magritte', year: 1929 },
    { title: 'Abaporu', artist: 'Tarsila do Amaral', year: 1928 },
    { title: 'A Criação de Adão', artist: 'Michelangelo Buonarotti', year: 1511 },
    { title: 'Medusa', artist: 'Caravaggio', year: 1597 },
    { title: 'As Meninas', artist: 'Diego Velázquez', year: 1656 },
    { title: 'O Grito', artist: 'Edvard Munch', year: 1893 },
    { title: 'O Beijo', artist: 'Gustav Klimt', year: 1908 },
    { title: 'A Persistência da Memória', artist: 'Salvador Dalí', year: 1931 },
    { title: 'Guernica', artist: 'Pablo Picasso', year: 1937 },
    { title: 'O Nascimento de Vênus', artist: 'Sandro Botticelli', year: 1485 },
    { title: 'A Última Ceia', artist: 'Leonardo da Vinci', year: 1498 },
    { title: 'Moça com Brinco de Pérola', artist: 'Johannes Vermeer', year: 1665 },
    { title: 'O Sonho', artist: 'Henri Rousseau', year: 1910 },
    { title: 'Autorretrato com Orelha Cortada', artist:'Vincent van Gogh' , year :1889},
    { title:'A Liberdade Guiando o Povo' ,artist:'Eugène Delacroix' ,year :1830},
    { title:'As Tentações de Santo Antão' ,artist:'Hieronymus Bosch' ,year :1505},
    { title:'O Jardim das Delícias Terrenas' ,artist:'Hieronymus Bosch' ,year :1510},
    { title:'O Casamento Arnolfini' ,artist:'Jan van Eyck' ,year :1434},
    { title:'A Ronda Noturna' ,artist:'Rembrandt van Rijn' ,year :1642},
    { title:'A Lição de Anatomia do Dr. Nicolaes Tulp' ,artist:'Rembrandt van Rijn' ,year :1632},
    { title:'Os Embaixadores' ,artist:'Hans Holbein, o Jovem' ,year :1533},
    { title:'As Três Graças' ,artist:'Jean-Baptiste Regnault' ,year :1793},
    { title:'A Morte de Marat' ,artist:'Jacques-Louis David' ,year :1793},
    { title:'A Morte da Virgem' ,artist:'Caravaggio' ,year :1606},
    { title:'O Enterro do Conde de Orgaz' ,artist:'El Greco' ,year :1586},
  ];
