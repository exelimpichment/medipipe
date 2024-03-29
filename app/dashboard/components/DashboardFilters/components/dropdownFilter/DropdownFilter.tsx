import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

const DropdownFilter = () => {
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
  return (
    <Command className="w-48">
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={() => {
                // setSelectedStatus(
                //   statuses.find((priority) => priority.value === value) || null
                // );
                // setOpen(false);
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default DropdownFilter;
