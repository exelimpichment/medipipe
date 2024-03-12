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
import { ArrowDownNarrowWide, ArrowUpWideNarrow } from 'lucide-react';
import useOrderSearchParams from '../../../../hooks/useValidateOrderSearchParams';

export function DropdownTitleTableHead() {
  const {
    createOrderQueryString,
    pathname: currentPathname,
    router,
  } = useQueryString();

  const order = useOrderSearchParams();

  const OrderIcon =
    order === 'ascending' ? ArrowUpWideNarrow : ArrowDownNarrowWide;

  return (
    <th scope="col">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="translate-x-[-16px] text-muted-foreground"
          >
            <span>Date</span>
            <OrderIcon size={16} className="ml-[4px] text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32" align={'start'}>
          <DropdownMenuRadioGroup
            value={order}
            onValueChange={(limitSetterEvent) =>
              router.push(
                `${currentPathname}?${createOrderQueryString(
                  limitSetterEvent
                )}`,
                { scroll: false }
              )
            }
          >
            <DropdownMenuRadioItem value="ascending">
              Ascending
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="descending">
              Descending
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </th>
  );
}
