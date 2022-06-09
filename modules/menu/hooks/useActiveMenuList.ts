import { useMemo } from 'react';

import { useRouter } from 'next/router';

import { getActiveMenuList } from '../utils';
import useCheckMenuList from './useCheckMenuList';
import useListReadMenu from './useListReadMenu';

const useActiveMenuList = () => {
  const location = useRouter();

  const menuList = useListReadMenu();

  const checkMenuList = useCheckMenuList({ fullMenuList: menuList });

  return useMemo(() => getActiveMenuList(checkMenuList, location.pathname), [location.pathname, checkMenuList]);
};

export default useActiveMenuList;
