import TableBody from './TableBody';
import TableHead from './TableHead';

const Table = () => {
  return (
    <table className="mt-4 flex w-full flex-col rounded-md ">
      <TableHead />
      <TableBody />
    </table>
  );
};

export default Table;
