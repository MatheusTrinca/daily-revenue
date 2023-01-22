import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.dark};
  padding: ${RFValue(40)}px ${RFValue(10)}px ${RFValue(14)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ValueContainer = styled.View`
  width: ${RFValue(180)}px;
  height: ${RFValue(48)}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.white};
  border-radius: ${RFValue(32)}px;
  align-items: center;
  justify-content: center;
`;

export const ValueText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
