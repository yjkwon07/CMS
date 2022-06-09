import { useMemo } from 'react';

import useCheckMenuList from './useCheckMenuList';
import useListReadMenu from './useListReadMenu';

/**
 * 메뉴들을 불러오고 권한에 따라 메뉴를 정리하고 MenuType을 리턴
 * @param depth n차 메뉴정보로만 이루어진 MenuType[] 리턴하도록 설정
 */
const useMenuList = (depth?: number) => {
  const menuList = useListReadMenu();

  const checkMenuList = useCheckMenuList({ fullMenuList: menuList });

  return useMemo(
    () => (depth ? checkMenuList.filter((menu) => menu.show && menu.depth === depth) : checkMenuList),
    [checkMenuList, depth],
  );
};

export default useMenuList;
