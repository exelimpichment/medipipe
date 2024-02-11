'use client';

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronsUpDown } from 'lucide-react';

type Checked = DropdownMenuCheckboxItemProps['checked'];

export function DropdownTitleTableHead() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <th scope="col" className="flex-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="flex justify-start">
          <Button
            type="button"
            variant="ghost"
            className="h-8 translate-x-[-16px] text-muted-foreground"
          >
            <span className="text-s pr-[6px]">Title</span>
            <ChevronsUpDown size={12} className="text-muted-foreground" />

            {/* <ArrowUp size={16} /> */}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-32"
          sideOffset={8}
          side="bottom"
          align="start"
        >
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
            disabled
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </th>
  );
}
