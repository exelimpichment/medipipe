import { Skeleton } from '@/components/ui/skeleton';

const TableBodyRowSkeleton = () => {
  return (
    <tr className="flex h-12 w-full items-center border-b border-l border-r">
      <td className="h-12 w-full">
        <Skeleton className=" h-[46px] w-full rounded-none" />
      </td>
    </tr>
  );
};

export default TableBodyRowSkeleton;
