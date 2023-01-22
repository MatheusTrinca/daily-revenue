import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { DrawerButtonContainer, MenuIcon } from './styles';

interface IDrawerButtonProps extends TouchableOpacityProps {
  onPress: () => void;
}

export const DrawerButton: React.FC<IDrawerButtonProps> = ({ onPress }) => {
  return (
    <DrawerButtonContainer onPress={onPress}>
      <MenuIcon name="menu" />
    </DrawerButtonContainer>
  );
};
