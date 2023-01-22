import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const AppLoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AppLoadingIndicator = styled.ActivityIndicator.attrs({
  color: theme.colors.gray,
})`
  margin-top: ${RFValue(180)}px;
`;
