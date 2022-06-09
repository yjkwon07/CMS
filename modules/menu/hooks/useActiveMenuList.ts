import { useMemo } from 'react';

import { getActiveMenuList } from '../utils';
import useCheckMenuList from './useCheckMenuList';
import useListReadMenu from './useListReadMenu';

/**
 * pathname에 변화에 따라 메뉴 위치를 찾고 해당 MenuType을 리턴
 * @param location Location
 */
const useActiveMenuList = (location: Location) => {
  const menuList = useListReadMenu();

  const checkMenuList = useCheckMenuList({ fullMenuList: menuList });

  return useMemo(() => getActiveMenuList(checkMenuList, location.pathname), [location.pathname, checkMenuList]);
};

export default useActiveMenuList;
