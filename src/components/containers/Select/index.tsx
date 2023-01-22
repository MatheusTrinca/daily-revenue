import React, { useCallback } from 'react';
import { format } from 'date-fns';
import { Offer } from '../../../models/Offer';
import {
  Container,
  DateButtonContainer,
  DateButtonText,
  DateDisplay,
  DateDisplayContainer,
  DateDisplayText,
  OfferDescription,
  OfferInfoContainer,
  OfferName,
  OfferSelectorContainer,
  RightIcon,
  RightIconContainer,
  RightIconDateContainer,
  SelectTitle,
  Separator,
} from './styles';
import { formatCurrency } from '../../../utils/formatCurrency';

interface ISelectProps {
  date: Date | undefined;
  setShowDatePicker: (value: boolean) => void;
  offer?: Offer;
}

export const Select: React.FC<ISelectProps> = ({
  date,
  setShowDatePicker,
  offer,
}) => {
  const handleShowDatePicker = useCallback(() => {
    setShowDatePicker(true);
  }, [setShowDatePicker]);

  const RenderOffer = () => {
    if (offer) {
      return (
        <OfferInfoContainer>
          <OfferName>{formatCurrency(offer.validation)} validation</OfferName>
          <OfferDescription>{offer.description}</OfferDescription>
        </OfferInfoContainer>
      );
    }
    return (
      <OfferInfoContainer>
        <OfferName>$0.50 validation</OfferName>
        <OfferDescription>16 oz. coffee purchase ($2.50)</OfferDescription>
      </OfferInfoContainer>
    );
  };

  return (
    <Container>
      <SelectTitle>Select offer and time</SelectTitle>
      <OfferSelectorContainer>
        <RenderOffer />

        <RightIconContainer disabled>
          <RightIcon name="caretdown" />
        </RightIconContainer>
      </OfferSelectorContainer>

      <DateDisplayContainer>
        <DateDisplay>
          <DateDisplayText>
            {date ? format(date, 'MMMM d, yyyy') : 'Select a date'}
          </DateDisplayText>
        </DateDisplay>
        <DateButtonContainer testID="dayBtn" onPress={handleShowDatePicker}>
          <DateButtonText>day</DateButtonText>
          <Separator />
          <RightIconDateContainer>
            <RightIcon name="caretdown" />
          </RightIconDateContainer>
        </DateButtonContainer>
      </DateDisplayContainer>
    </Container>
  );
};

export default Select;
