import { Api } from '../axios-config';
import { Revenue } from '../../../models/Revenue';
import { getSplittedDate } from '../../../utils/getSplittedDate';

const getRevenueByDate = async (date: Date): Promise<Revenue | Error> => {
  const { year, month, day } = getSplittedDate(date);

  try {
    const relativeUrl = `/year/${year}/month/${month}/day/${day}/revenue`;

    const { data } = await Api.get(relativeUrl);

    return data.revenue;
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || 'Error fetching revenue.',
    );
  }
};

export const RevenueService = {
  getRevenueByDate,
};
