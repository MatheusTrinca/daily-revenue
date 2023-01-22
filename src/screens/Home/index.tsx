import React, { useCallback, useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { Header } from '../../components/containers/Header';
import Select from '../../components/containers/Select';
import DatePicker from '../../components/datepicker';
import LoadingSpinner from '../../components/loading-spinner';
import RevenueList from '../../components/containers/RevenueList';
import { RevenueService } from '../../services/api/revenue/RevenueService';
import { Revenue } from '../../models/Revenue';
import { Container, ContentContainer, ModalView } from './styles';

export const Home: React.FC = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState<Date>();
  const [revenue, setRevenue] = useState<Revenue>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSetDate = useCallback((date: string) => {
    setDate(new Date(date));
    setShowDatePicker(false);
  }, []);

  useEffect(() => {
    if (date) {
      if (date > new Date()) {
        Alert.alert('Revenue', 'Please choose a date before the current one');
        setDate(undefined);
        setRevenue(undefined);
        return;
      }

      setIsLoading(true);
      RevenueService.getRevenueByDate(date)
        .then(response => {
          if (response instanceof Error) {
            Alert.alert(
              'Revenue',
              'Error fetching data, please try again later.',
            );
            setDate(undefined);
            return;
          }
          setRevenue(response);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [date]);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    } else if (revenue) return <RevenueList revenue={revenue} />;
  };

  return (
    <>
      {showDatePicker && (
        <ModalView>
          <DatePicker setDate={handleSetDate} />
        </ModalView>
      )}
      <Container>
        <Header />
        <ScrollView>
          <ContentContainer>
            <Select
              setShowDatePicker={setShowDatePicker}
              date={date}
              offer={revenue?.offer}
            />
            {renderContent()}
          </ContentContainer>
        </ScrollView>
      </Container>
    </>
  );
};
