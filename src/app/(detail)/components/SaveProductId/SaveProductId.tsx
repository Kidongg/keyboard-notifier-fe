'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import useProductId from '../../store/useProductIdStore';

const SaveProductId = () => {
  const pathname = usePathname();
  const { setProductId } = useProductId();

  useEffect(() => {
    setProductId(pathname.replace('/', ''));
  }, []);

  return null;
};

export default SaveProductId;
