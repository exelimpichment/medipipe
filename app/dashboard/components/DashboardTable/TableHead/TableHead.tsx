import CheckboxTableHead from './components/CheckboxTableHead';
import { DropdownPriorityTableHead } from './components/DropdownPriorityTableHead';
import { DropdownStatusTableHead } from './components/DropdownStatusTableHead';
import { DropdownTitleTableHead } from './components/DropdownTitleTableHead';
import EmptySpacer from './components/EmptySpacer';

const TableHead = () => {
  return (
    <thead>
      <tr className="flex h-11 items-center rounded-t-md border border-solid px-2">
        <CheckboxTableHead />
        <DropdownTitleTableHead />
        <DropdownStatusTableHead />
        <DropdownPriorityTableHead />
        <EmptySpacer />
      </tr>
    </thead>
  );
};

export default TableHead;
