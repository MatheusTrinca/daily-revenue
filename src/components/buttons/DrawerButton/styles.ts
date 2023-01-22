import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const DrawerButtonContainer = styled(TouchableOpacity)``;

export const MenuIcon = styled(Ionicons)`
  font-size: ${RFValue(50)}px;
  color: ${({ theme }) => theme.colors.white};
`;
