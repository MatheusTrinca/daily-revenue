import React from 'react';
import { DrawerButton } from '../../buttons/DrawerButton';
import { HeaderButton } from '../../buttons/HeaderButton';
import {
  ButtonsContainer,
  Container,
  ValueContainer,
  ValueText,
} from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <DrawerButton onPress={() => {}} />
      <ValueContainer>
        <ValueText>$1,250.50</ValueText>
      </ValueContainer>
      <ButtonsContainer>
        <HeaderButton iconName="star" outlined onPress={() => {}} />
        <HeaderButton iconName="dollar" onPress={() => {}} />
      </ButtonsContainer>
    </Container>
  );
};
