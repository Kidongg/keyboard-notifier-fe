import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import useProductId from '../store/useProductIdStore';

const useSaveProductId = () => {
  const pathname = usePathname();
  const { setProductId } = useProductId();

  useEffect(() => {
    setProductId(pathname.replace('/', ''));
  }, [pathname, setProductId]);
};

export default useSaveProductId;
