import React from 'react';
import DateTimePicker from 'react-native-modern-datepicker';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

interface IDatePickerProps {
  setDate: (date: string) => void;
}

const DatePicker: React.FC<IDatePickerProps> = ({ setDate }) => {
  const options = {
    textHeaderColor: theme.colors.secondary,
    mainColor: theme.colors.secondary,
  };

  return (
    <DateTimePicker
      onSelectedChange={setDate}
      mode="calendar"
      options={options}
      style={{ borderRadius: 10, height: RFValue(380) }}
    />
  );
};

export default DatePicker;
