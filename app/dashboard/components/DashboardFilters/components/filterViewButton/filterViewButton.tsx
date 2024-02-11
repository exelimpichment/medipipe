import { Button } from '@/components/ui/button';
import { PiSlidersHorizontalDuotone } from 'react-icons/pi';

const FilterViewButton = () => {
  return (
    <div className="relative">
      <Button className="h-8" variant={'outline'}>
        <PiSlidersHorizontalDuotone size={16} />
        <span className="pl-[6px]">View</span>
      </Button>
    </div>
  );
};

export default FilterViewButton;
