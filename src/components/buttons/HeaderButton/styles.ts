import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface ButtonStyledProps extends TouchableOpacityProps {
  outlined?: boolean;
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonStyledProps>`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-width: ${props => (props.outlined ? `${1}px` : 0)};
  border-color: ${({ theme }) => theme.colors.white};
  border-radius: ${RFValue(30)}px;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.outlined ? 'transparent' : props.theme.colors.secondary};
  margin-right: ${RFValue(8)}px;
`;

export const ButtonIcon = styled(FontAwesome)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.white};
`;
