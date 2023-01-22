import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const RevenueContainer = styled.View`
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.white};
  padding: ${RFValue(12)}px 0;
`;

export const RevenueTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${RFValue(16)}px;
`;

export const RevenueValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(32)}px;
  margin-bottom: ${RFValue(24)}px;
`;

export const OfferListContainer = styled.View`
  margin: ${RFValue(24)}px 0;
`;

export const SummaryListContainer = styled.View`
  margin: ${RFValue(24)}px 0;
`;
