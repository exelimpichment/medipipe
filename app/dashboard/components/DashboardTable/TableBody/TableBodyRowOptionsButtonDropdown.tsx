import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

import useTaskDelete from '@/app/dashboard/hooks/useTaskDelete';
import { Trash2 } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import { dropdownContent } from './utils/dropdownContent';

const TableBodyRowOptionsButtonDropdown = ({
  taskId,
  setDropdownOpen,
}: {
  taskId: number;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { mutate } = useTaskDelete();

  const handleMutate = (taskId: number) => {
    mutate(taskId);
    setDropdownOpen(false);
  };

  return (
    <div className="absolute right-0 z-10 mt-1 w-32 rounded-md border">
      <Command>
        <CommandList>
          <CommandGroup>
            {dropdownContent.map(({ icon: Icon, label, value }) => (
              <CommandItem
                className="mb-1 cursor-pointer"
                key={value}
                value={value}
                // onSelect={() => mutation.mutate()}
              >
                <Icon size={16} className="mr-2 text-muted-foreground" />
                <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {label}
                </span>
              </CommandItem>
            ))}
            <CommandSeparator className="my-1" />
            <CommandItem
              className=" cursor-pointer text-red-600"
              value={'Delete'}
              onSelect={() => handleMutate(taskId)}
            >
              <Trash2
                size={16}
                className="mr-2 text-muted-foreground text-red-600"
              />
              <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Delete
              </span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default TableBodyRowOptionsButtonDropdown;
