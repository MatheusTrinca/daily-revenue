import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Select } from '../index';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../../../global/styles/theme';
import { format } from 'date-fns';
import { DateDisplayText } from '../styles';

describe('Select', () => {
  it('should render the Select component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Select date={new Date()} setShowDatePicker={() => {}} />
      </ThemeProvider>,
    );
  });

  it('should render the correct date', () => {
    const date = new Date('2023/01/21');

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <DateDisplayText>
          {date ? format(date, 'MMMM d, yyyy') : 'Select a date'}
        </DateDisplayText>
      </ThemeProvider>,
    );

    expect(getByText('January 21, 2023')).toBeTruthy();
  });

  it('should call show date picker when day button is pressed', () => {
    const onShowDatePickerMock = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Select date={new Date()} setShowDatePicker={onShowDatePickerMock} />
      </ThemeProvider>,
    );

    const dayButton = getByTestId('dayBtn');

    fireEvent.press(dayButton);

    expect(onShowDatePickerMock).toBeCalledTimes(1);
  });
});
