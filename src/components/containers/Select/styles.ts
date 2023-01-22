import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${RFValue(20)}px 0;
`;

export const SelectTitle = styled.Text`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${RFValue(16)}px;
`;

export const OfferSelectorContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${RFValue(6)}px;
  flex-direction: row;
  overflow: hidden;
  margin: ${RFValue(12)}px 0;
`;

export const OfferInfoContainer = styled.View`
  padding: ${RFValue(12)}px 0 ${RFValue(12)}px ${RFValue(12)}px;
`;

export const OfferName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(16)}px;
`;

export const OfferDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(16)}px;
`;

export const RightIconContainer = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.gray};
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: ${RFValue(28)}px;
`;

export const RightIconDateContainer = styled.View`
  margin: 0 ${RFValue(6)}px;
`;

export const RightIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${RFValue(16)}px;
  background-color: transparent;
`;

export const DateDisplayContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DateDisplay = styled.View`
  background-color: white;
  padding: ${RFValue(10)}px 0 ${RFValue(10)}px ${RFValue(12)}px;
  flex: 1;
  justify-content: center;
  margin-right: ${RFValue(12)}px;
  max-width: ${300}px;
`;

export const DateDisplayText = styled.Text`
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const DateButtonContainer = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.gray};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${RFValue(132)}px;
  border-radius: ${RFValue(6)}px;
`;

export const DateButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${RFValue(16)}px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  flex: 1;
`;

export const Separator = styled.View`
  width: 1px;
  height: ${RFValue(30)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-left: auto;
`;
