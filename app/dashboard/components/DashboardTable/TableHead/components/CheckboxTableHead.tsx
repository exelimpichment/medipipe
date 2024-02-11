import { Checkbox } from '@/components/ui/checkbox';

const CheckboxTableHead = () => {
  return (
    <th scope="col" className="flex w-32 items-center space-x-2">
      <Checkbox id="task" />
      <label
        htmlFor="task"
        className="text-sm font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Task
      </label>
    </th>
  );
};

export default CheckboxTableHead;
