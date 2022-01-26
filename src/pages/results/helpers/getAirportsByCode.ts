import { Airport } from '../../../models/Airport';

export const getAirportsByCode = (
  airports: Airport[],
  codesToFind: string[]
) => {
  if (!airports.length) return;

  return codesToFind.map((codeToFind) =>
    airports.find(({ code }) => code === codeToFind)
  );
};
