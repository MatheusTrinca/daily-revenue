import React from 'react';
import ListItem from '../ListItem';
import { formatCurrency } from '../../../utils/formatCurrency';
import { Revenue } from '../../../models/Revenue';
import { analyticsData } from '../../../assets/mocks/analyticsData';
import { formatValue } from '../../../utils/formatValue';
import {
  RevenueContainer,
  RevenueTitle,
  RevenueValue,
  OfferListContainer,
  SummaryListContainer,
} from './styles';

interface IRevenueListProps {
  revenue: Revenue;
}

const RevenueList: React.FC<IRevenueListProps> = ({ revenue }) => {
  return (
    <>
      <RevenueContainer>
        <RevenueTitle>Net revenue</RevenueTitle>
        <RevenueValue>{formatCurrency(revenue.net)}</RevenueValue>
        <ListItem
          title="Gross revenue"
          value={formatCurrency(revenue.gross)}
          topBorder
          borderTopColor="gray"
        />
        <ListItem title="Credits spent" value={formatCurrency(revenue.spent)} />
      </RevenueContainer>
      <OfferListContainer>
        <ListItem
          title="Validation"
          topBorder
          borderTopColor="white"
          value={formatCurrency(revenue.offer.validation)}
        />
        <ListItem title="Item" value={revenue.offer.item} />
        <ListItem
          title="Unit cost"
          value={formatCurrency(revenue.offer.unitCost)}
        />
        <ListItem title="Limit" value={revenue.offer.limit} />
        <ListItem title="Category" value={revenue.offer.category} />
      </OfferListContainer>
      <SummaryListContainer>
        <ListItem
          title="Impressions"
          topBorder
          borderTopColor="white"
          value={formatValue(analyticsData.impressions)}
        />
        <ListItem title="Clicks" value="705" />
        <ListItem title="Validations" value={revenue.validations.length} />
        <ListItem
          title="Offer rank by revenue"
          value={analyticsData.offerRankByRevenue}
        />
        <ListItem
          title="Offer rank by activity"
          value={analyticsData.offerRankByActivity}
        />
      </SummaryListContainer>
    </>
  );
};

export default RevenueList;
