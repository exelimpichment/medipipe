import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { hasQueryParam } from '../../utils/hasQueryParam';

const FilterResetButton = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  if (!hasQueryParam(searchParams)) return null;

  return (
    <Button
      className="h-8"
      variant={'ghost'}
      onClick={() => router.push('/dashboard', { scroll: false })}
    >
      <span className="pr-1">Reset</span>
      <X size={16} />
    </Button>
  );
};

export default FilterResetButton;
