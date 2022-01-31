import { formatConnectionsFromApi } from '..';

const splittedByNewLine = ['1234: 1, 2, 3, 4', '5678: 5, 6, 7, 8'];

describe('formatConnectionsFromApi', () => {
  it('should return a key-value information about connections', () => {
    const connections = formatConnectionsFromApi(splittedByNewLine);

    const expectedObject = {
      1234: ['1', '2', '3', '4'],
      5678: ['5', '6', '7', '8'],
    };
    expect(connections).toMatchObject(expectedObject);
  });
});
