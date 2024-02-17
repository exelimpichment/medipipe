import useQueryString from '@/app/dashboard/hooks/useQueryString';
import { Input } from '@/components/ui/input';

const FilterInput = () => {
  const {
    createQueryString,
    pathname: currentPathname,
    router,
  } = useQueryString();

  return (
    <Input
      className="h-8 max-w-[250px] px-3 py-1"
      placeholder="Filter tasks..."
      onChange={(event) =>
        router.push(
          `${currentPathname}?${createQueryString(
            'search',
            event.target.value
          )}`
        )
      }
    />
  );
};

export default FilterInput;
