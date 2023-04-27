import React from 'react';
import { Description, HomeWrapper } from './styles';
import Title from '../../components/Title';

const Home: React.FC = () =>
  <HomeWrapper>
    <Title>Game of Thrones Characters</Title>

    <Description>List of Game of Thrones Characters, what they look like, their family, and their title</Description>
  </HomeWrapper>;

export default Home;