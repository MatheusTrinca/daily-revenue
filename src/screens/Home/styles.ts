import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContentContainer = styled.View`
  padding: ${RFValue(20)}px;
`;

export const ModalView = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  justify-content: center;
  flex: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  padding: 0 ${RFValue(20)}px;
`;

export const RevenueConentContainer = styled.View``;
