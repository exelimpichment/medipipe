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
import { ArrowDown } from 'lucide-react';

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
            variant="ghost"
            className="h-8 translate-x-[-16px] text-muted-foreground"
          >
            <span className="pr-[6px] text-xs">Title</span>
            <ArrowDown size={16} />
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
