import React from 'react';
import { Description, HomeWrapper } from './styles';
import Title from '../../components/Title';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HomeWrapper>
      <Title>{t('home.title')}</Title>

      <Description>{t('home.description')}</Description>
    </HomeWrapper>
  );
};

export default Home;