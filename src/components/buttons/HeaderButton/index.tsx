import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonIcon } from './styles';

interface IHeaderButton extends TouchableOpacityProps {
  iconName: string;
  outlined?: boolean;
  onPress: () => void;
}

export const HeaderButton: React.FC<IHeaderButton> = ({
  iconName,
  outlined = false,
  onPress,
}) => {
  return (
    <ButtonContainer onPress={onPress} outlined={outlined}>
      <ButtonIcon name={iconName} />
    </ButtonContainer>
  );
};
