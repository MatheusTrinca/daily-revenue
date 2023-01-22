import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface IListItemStyledProps {
  topBorder?: boolean;
  borderTopColor?: string;
}

export const ListItemContainer = styled(View)<IListItemStyledProps>`
  border-top-width: ${props => (props.topBorder ? `${1}px` : 0)};
  border-top-color: ${props =>
    props.borderTopColor === 'gray' ? props.theme.colors.mediumGray : 'white'};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.mediumGray};
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(7)}px 0;
`;

export const ListItemTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${RFValue(16)}px;
  letter-spacing: 0.2px;
`;

export const ListItemValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(16)}px;
`;
