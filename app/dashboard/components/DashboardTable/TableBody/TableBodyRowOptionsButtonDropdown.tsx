import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

import { ExternalLink, Pencil, ScanEye, Trash2 } from 'lucide-react';

const dropdownContent = [
  { key: 0, label: 'Preview', value: 'Preview', icon: ScanEye },
  { key: 1, label: 'Open', value: 'Open', icon: ExternalLink },
  { key: 2, label: 'Edit', value: 'Edit', icon: Pencil },
];

const TableBodyRowOptionsButtonDropdown = () => {
  return (
    <div className="absolute right-0 z-10 mt-1 w-32 rounded-md border">
      <Command>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {dropdownContent.map(({ icon: Icon, label, value }) => (
              <CommandItem
                className="mb-1 cursor-pointer"
                key={value}
                value={value}
                onSelect={(value) => {}}
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
              onSelect={(value) => {}}
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
