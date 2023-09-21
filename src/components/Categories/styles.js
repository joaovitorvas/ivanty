import styled from 'styled-components'
import painting from './../../assets/images/pintura.jpg'

export const ImgContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 20.6875rem;
  flex-shrink: 0;
  opacity: 0.5;
  background: url(${painting}), lightgray 50% / cover no-repeat;
`

export const CategoriesTitle = styled.p`
  color: #FFF;
  font-family: Roboto;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 20.625rem;
  height: 2.8125rem;
  flex-shrink: 0;
`