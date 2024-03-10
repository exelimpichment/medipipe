'use client';

import { useModalStore } from '@/app/store/ModalStoreProvider';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const AddTaskButton = () => {
  const onOpen = useModalStore((state) => state.onOpen);
  const setModalInternals = useModalStore((state) => state.setModalInternals);

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
