'use client';

import { useEffect, useState } from 'react';
import ModalWrapper from '../modals/ModalWrapper';

export const Modal = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ModalWrapper />
    </>
  );
};
