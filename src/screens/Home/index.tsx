import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';
import { Header } from '../../components/containers/Header';
import Select from '../../components/containers/Select';
import DatePicker from '../../components/datepicker';
import LoadingSpinner from '../../components/loading-spinner';
import RevenueList from '../../components/containers/RevenueList';
import { Container, ContentContainer, ModalView } from './styles';
import { useRevenue } from '../../hooks/useRevenue';

export const Home: React.FC = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState<Date>();

  const { revenue, isLoading } = useRevenue(date);

  const handleSetDate = useCallback((date: string) => {
    setDate(new Date(date));
    setShowDatePicker(false);
  }, []);

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
