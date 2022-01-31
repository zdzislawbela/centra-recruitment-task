interface Arguments {
  connections: {};
  fromId: number;
  toId: number;
}

export const getConnections = ({ connections, fromId, toId }: Arguments) => {
  const changes = [];
  const excluded = [];
  let accumulator = [];

  const findIds = (connectionsFrom: string[]) => {
    connectionsFrom.forEach((id) => {
      if (excluded.includes(id)) return;
      accumulator.push(id);

      if (connections[id].includes(toId.toString())) {
        changes.push(accumulator);
        accumulator = [];
      }
      excluded.push(id);

      findIds(connections[id]);
    });
  };

  findIds(connections[fromId]);

  return changes;
};
