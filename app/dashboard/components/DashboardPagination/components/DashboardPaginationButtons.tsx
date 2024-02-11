import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

const DashboardPaginationButtons = () => {
  return (
    <div className="flex gap-2">
      <Button
        type="button"
        variant={'outline'}
        className="h-8 w-8 p-0 text-muted-foreground"
      >
        <ChevronsLeft size={16} />
      </Button>
      <Button
        type="button"
        variant={'outline'}
        className="h-8 w-8 p-0 text-muted-foreground"
      >
        <ChevronLeft size={16} />
      </Button>
      <Button
        type="button"
        variant={'outline'}
        className="h-8 w-8 p-0 text-muted-foreground"
      >
        <ChevronRight size={16} />
      </Button>
      <Button
        type="button"
        variant={'outline'}
        className="h-8 w-8 p-0 text-muted-foreground"
      >
        <ChevronsRight size={16} />
      </Button>
    </div>
  );
};

export default DashboardPaginationButtons;
