import { useMemo } from 'react';

import cloneDeep from 'lodash/cloneDeep';

import flatten from '@/utils/flatten';
import nestedChildren from '@/utils/nestedChildren';

import { MenuType } from '../@types';

interface IProps {
  fullMenuList: MenuType[];
  showMenuIdList?: string[];
}

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
      ).sort((menuA, menuB) => Number(menuA.ord) - Number(menuB.ord)),
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
