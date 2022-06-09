import { useMemo } from 'react';

import useCheckMenuList from './useCheckMenuList';
import useListReadMenu from './useListReadMenu';

const useMenuList = (depth?: number) => {
  const menuList = useListReadMenu();

  const checkMenuList = useCheckMenuList({ fullMenuList: menuList });

  return useMemo(
    () => (depth ? checkMenuList.filter((menu) => menu.show && menu.depth === depth) : checkMenuList),
    [checkMenuList, depth],
  );
};

export default useMenuList;
