import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Dispatch, SetStateAction } from 'react';

interface IFilterButtonDropdownProps {
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedStatus: Dispatch<SetStateAction<string>>;
}

const FilterButtonDropdown: React.FC<IFilterButtonDropdownProps> = ({
  setDropdownOpen,
  setSelectedStatus,
}) => {
  return (
    <div className="absolute left-0 mt-2 w-48 rounded-md border">
      <Command>
        <CommandInput placeholder="Filter status..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {statuses.map((status) => (
              <CommandItem
                key={status.value}
                value={status.value}
                onSelect={(value) => {
                  setSelectedStatus(value);
                  setDropdownOpen(false);
                }}
              >
                {status.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

type Status = {
  value: string;
  label: string;
};

const statuses: Status[] = [
  {
    value: 'backlog',
    label: 'Backlog',
  },
  {
    value: 'todo',
    label: 'Todo',
  },
  {
    value: 'in progress',
    label: 'In Progress',
  },
  {
    value: 'done',
    label: 'Done',
  },
  {
    value: 'canceled',
    label: 'Canceled',
  },
];

export default FilterButtonDropdown;
