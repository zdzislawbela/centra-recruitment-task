import { Airport } from '../../../models/Airport';

export const getImagesByCode = (
  airports: Airport[],
  codesToFind: string[],
  size: string
) => {
  if (!airports.length) return;

  return codesToFind.map(
    (codeToFind) =>
      airports.find(({ code }) => code === codeToFind).images[size]
  );
};
