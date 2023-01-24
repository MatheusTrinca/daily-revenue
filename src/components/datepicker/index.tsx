import React from 'react';
import { DatePickerSelector } from './styles';

interface IDatePickerSelectorProps {
  setDate: (date: string) => void;
}

const DatePicker: React.FC<IDatePickerSelectorProps> = ({ setDate }) => {
  return <DatePickerSelector onSelectedChange={setDate} />;
};

export default DatePicker;
