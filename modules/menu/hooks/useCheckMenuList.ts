import { useMemo } from 'react';

import cloneDeep from 'lodash/cloneDeep';

import flatten from '@/utils/flatten';
import nestedChildren from '@/utils/nestedChildren';

import { MenuType } from '../@types';

interface IProps {
  fullMenuList: MenuType[];
  showMenuIdList?: string[];
}

/**
 * 권한 혹은 강제 메뉴 제거를 해야할 때, showMenuIdList를 정하여 메뉴를 정리하고, target url 정보를 수정
 * @param props.fullMenuList 하위에 있는 메뉴의 정보까지 모두 flatten한 상태로 되어 있어야 함. (단, subMenuList 정보는 유지되어야 함)
 * @param props.showMenuIdList 배열에 담긴 메뉴들만 보여주도록 설정
 */
const useCheckMenuList = ({ fullMenuList, showMenuIdList }: IProps) => {
  const showMenuList = useMemo(
    () =>
      flatten(
        nestedChildren(
          showMenuIdList ? fullMenuList.filter((menu) => showMenuIdList.includes(menu.menuId)) : fullMenuList,
          'menuId',
          'parentMenuId',
          'subMenuList',
          '',
        ),
        'subMenuList',
      ).sort((menuA, menuB) => menuA.ord - menuB.ord),
    [fullMenuList, showMenuIdList],
  );

  const menuList = useMemo(
    () =>
      showMenuList.map((menu) => {
        const cloneMenu = cloneDeep(menu);
        if (cloneMenu.target && cloneMenu.subMenuList.length) {
          cloneMenu.url = cloneMenu.subMenuList[0].url;
        }
        return cloneMenu;
      }),
    [showMenuList],
  );

  return menuList;
};

export default useCheckMenuList;
