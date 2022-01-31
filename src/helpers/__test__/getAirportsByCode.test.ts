import { getAirportsByCode } from '..';
import { airports } from './airports';

describe('getAirportsByCode', () => {
  it('should return a coutry name searched by coutry code', () => {
    const airport = getAirportsByCode(airports, ['DKR']);
    const coutryName = airport[0].country;
    expect(coutryName).toEqual('Senegal');
  });

  it('should return two coutry names searched by coutry codes', () => {
    const airportsByCode = getAirportsByCode(airports, ['DKR', 'ATH']);
    const airportCountryNames = airportsByCode.map(
      (airport) => airport.country
    );
    expect(airportCountryNames).toEqual(['Senegal', 'Greece']);
  });

  it('should return undefined searched by not existing coutry code', () => {
    const airport = getAirportsByCode(airports, ['XYZ']);
    const coutryName = airport[0]?.country;
    expect(coutryName).toEqual(undefined);
  });
});
