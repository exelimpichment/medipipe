'use client';

import { useModalStore } from '@/app/store/StoreProvider';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useShallow } from 'zustand/react/shallow';

const AddTaskButton = () => {
  const [onOpen, setModalInternals] = useModalStore(
    useShallow((state) => [state.onOpen, state.setModalInternals])
  );

  const clickHandler = () => {
    setModalInternals('addTask');
    onOpen();
  };

  return (
    <Button
      className="h-[30px]  gap-1"
      type="button"
      variant="default"
      onClick={clickHandler}
    >
      <Plus size={16} />
      <span className="">Add Task</span>
    </Button>
  );
};

export default AddTaskButton;
