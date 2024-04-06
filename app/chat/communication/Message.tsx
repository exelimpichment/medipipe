'use client';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { cn } from '@/lib/utils';

import { Forward, Pencil, Reply, Trash2 } from 'lucide-react';

export const dropdownContent = [
  { key: 0, label: 'Reply', value: 'Reply', icon: Reply },
  { key: 1, label: 'Forward', value: 'Forward', icon: Forward },
  { key: 2, label: 'Edit', value: 'Edit', icon: Pencil },
];

const Message = ({
  message,
  isOwner,
}: {
  message: string;
  isOwner: boolean;
}) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="flex w-[90%]">
          <div
            className={cn(
              'rounded-xl px-3 py-2 text-sm',
              isOwner
                ? 'ml-auto bg-primary text-end text-primary-foreground'
                : ' bg-muted'
            )}
          >
            {message}
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        {dropdownContent.map((item) => {
          const Icon = item.icon;
          return (
            <ContextMenuItem key={item.key} className="cursor-pointer">
              <Icon size={16} className="mr-2 text-muted-foreground" />
              <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {item.label}
              </span>
            </ContextMenuItem>
          );
        })}
        <ContextMenuSeparator />
        <ContextMenuItem className=" cursor-pointer text-red-600">
          <Trash2
            size={16}
            className="mr-2 text-muted-foreground text-red-600"
          />
          <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Delete
          </span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default Message;
