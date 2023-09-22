import styled from 'styled-components';

export const ImgContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 20.6875rem;
  flex-shrink: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.backgroundImage}) center / cover no-repeat;
    opacity: 0.5; /* Defina a opacidade desejada aqui */
  }
`;

export const CategoriesTitle = styled.p`
  color: #FFF;
  font-family: Roboto;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 20.625rem;
  position: relative;
  height: 2.8125rem;
  top: 90%;
  left: 1rem;
  opacity: 1;
`;
