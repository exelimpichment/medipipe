'use client';

import useQueryString from '@/app/dashboard/hooks/useQueryString';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronsUpDown } from 'lucide-react';
import useValidateLimitSearchParams from '../hooks/useValidateLimitSearchParams';

export function RowsCountDropdown() {
  const limit = useValidateLimitSearchParams();

  const {
    createLimitQueryString,
    pathname: currentPathname,
    router,
  } = useQueryString();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-8 px-3 py-2">
          <span className="pr-3">{limit ?? 10}</span>
          <ChevronsUpDown size={12} className="text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-32"
        side="top"
        align="start"
        sideOffset={8}
      >
        <DropdownMenuRadioGroup
          value={limit as string}
          onValueChange={(limitSetterEvent) =>
            router.push(
              `${currentPathname}?${createLimitQueryString(limitSetterEvent)}`,
              { scroll: false }
            )
          }
        >
          <DropdownMenuRadioItem value="10">10</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="20">20</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="30">30</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="40">40</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="50">50</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
