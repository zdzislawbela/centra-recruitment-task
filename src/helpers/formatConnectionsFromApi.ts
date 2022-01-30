export const formatConnectionsFromApi = (array: string[]) =>
  array.reduce((airportsConnections, row) => {
    const semicolonIndex = row.indexOf(':');
    const key = row.slice(0, semicolonIndex);
    const values = row.slice(semicolonIndex + 2).split(' ');
    const clearValues = values.map((value) => value.replace(',', ''));

    return {
      ...airportsConnections,
      [key]: clearValues,
    };
  }, {});
