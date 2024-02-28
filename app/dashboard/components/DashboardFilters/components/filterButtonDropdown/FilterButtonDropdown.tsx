import useQueryString from '@/app/dashboard/hooks/useQueryString';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

import { Dispatch, SetStateAction } from 'react';
import { dropdownContent } from '../../utils/filterButtonDropdownArr';

interface IFilterButtonDropdownProps {
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
  category: 'status' | 'priority';
  selectedFilter: string | null;
}

const FilterButtonDropdown: React.FC<IFilterButtonDropdownProps> = ({
  setDropdownOpen,
  category,

  selectedFilter,
}) => {
  const {
    createQueryString,
    pathname: currentPathname,
    router,
  } = useQueryString();

  return (
    <div className="absolute left-0 mt-2 w-48 rounded-md border">
      <Command>
        <CommandInput placeholder="Filter status..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {dropdownContent[category].map(({ icon: Icon, label, value }) => (
              <CommandItem
                className="cursor-pointer"
                key={value}
                value={value}
                onSelect={(value) => {
                  router.push(
                    `${currentPathname}?${createQueryString(category, value)}`
                  );
                  setDropdownOpen(false);
                }}
              >
                <Icon size={16} className="mr-2 text-muted-foreground" />
                <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {label}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>

          {selectedFilter && (
            <>
              <CommandSeparator />
              <CommandGroup>
                <CommandItem
                  onSelect={() => {
                    router.push(
                      `${currentPathname}?${createQueryString(category, '')}`
                    );
                    setDropdownOpen(false);
                  }}
                  className="cursor-pointer justify-center text-center"
                >
                  Clear filters
                </CommandItem>
              </CommandGroup>
            </>
          )}
        </CommandList>
      </Command>
    </div>
  );
};

export default FilterButtonDropdown;
