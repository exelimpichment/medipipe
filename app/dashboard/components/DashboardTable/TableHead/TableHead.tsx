import CheckboxTableHead from './components/CheckboxTableHead';
import { DropdownTitleTableHead } from './components/DropdownTitleTableHead';

const TableHead = () => {
  return (
    <thead>
      <tr className="flex h-11 items-center justify-start rounded-t-md border border-solid px-2">
        <CheckboxTableHead />
        <DropdownTitleTableHead />
      </tr>
    </thead>
  );
};

export default TableHead;
