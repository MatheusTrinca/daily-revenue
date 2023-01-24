import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Revenue } from '../models/Revenue';
import { RevenueService } from '../services/api/revenue/RevenueService';

export const useRevenue = (date: Date | undefined) => {
  const [revenue, setRevenue] = useState<Revenue>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (date) {
      if (date > new Date()) {
        Alert.alert(
          'Daily Revenue',
          'Please choose a date before the current one',
        );
        setRevenue(undefined);
        return;
      }

      setIsLoading(true);
      RevenueService.getRevenueByDate(date)
        .then(response => {
          if (response instanceof Error) {
            Alert.alert(
              'Daily Revenue',
              'Error fetching data, please try again later.',
            );
            return;
          }
          setRevenue(response);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [date]);

  return { revenue, isLoading };
};
