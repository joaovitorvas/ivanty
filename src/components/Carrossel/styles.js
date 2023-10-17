import styled from 'styled-components';
import {motion} from 'framer-motion'

// Criar componentes estilizados para cada elemento que você quer aplicar o CSS
export const App = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Carousel = styled(motion.div)`
  cursor:grab;
  overflow: hidden;
  background-color: #122D42;
`;

export const GetImage = styled(motion.div)`
  display: flex;
`;

export const Item = styled(motion.div)`
  min-height: 100px;
  min-width: 8.5rem;
  padding: 14px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 5rem;
  pointer-events: none;
`;