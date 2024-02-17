'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronsUpDown } from 'lucide-react';

export function RowsCountDropdown() {
  const [position, setPosition] = React.useState('bottom');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-8 px-3 py-2">
          <span className="pr-3">10</span>
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
          value={position}
          onValueChange={(e) => console.log(e)}
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
