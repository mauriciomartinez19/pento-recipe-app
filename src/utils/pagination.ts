const getItems = <T>(data: T[], page: number, limit: number = 10) => {
  const start = (page - 1) * limit;
  const end = page * limit;
  return data.slice(start, end);
};

const getPageNumbers = <T>(data: T[], limit: number = 10) => {
  return Array.from(
    { length: Math.ceil(data.length / limit) },
    (_, i) => i + 1
  );
};

export const Pagination = {
  getItems,
  getPageNumbers,
};
