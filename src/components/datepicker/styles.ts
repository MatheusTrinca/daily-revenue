import styled from 'styled-components/native';
import DateTimePicker from 'react-native-modern-datepicker';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

export const DatePickerSelector = styled(DateTimePicker).attrs({
  mode: 'calendar',
  options: {
    textHeaderColor: theme.colors.secondary,
    mainColor: theme.colors.secondary,
  },
})`
  border-radius: 10px;
  height: ${RFValue(380)}px;
`;
