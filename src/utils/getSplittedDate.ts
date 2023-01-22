type ResponseType = {
  year: string;
  month: string;
  day: string;
};

export const getSplittedDate = (date: Date): ResponseType => {
  const formattedDateArray = date.toISOString().split('T')[0].split('-');
  const year = formattedDateArray[0];
  const month = formattedDateArray[1];
  const day = formattedDateArray[2];

  return {
    year,
    month,
    day,
  };
};
