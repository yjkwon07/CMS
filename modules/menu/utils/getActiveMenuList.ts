import { MenuType, ProgramPattern } from '@/modules/menu/@types';
import { menuCheck } from '@/modules/menu/config';
import allEqual from '@/utils/allEqual';

function getCurrentMenu(menuList: MenuType[], currentUrl: string, programPatternCheck: ProgramPattern) {
  const program = currentUrl.split('/')[1];
  const programPattern = programPatternCheck[program] || { exact: true };

  const findCurrentMenuList = menuList.filter((menuItem) => {
    if (programPattern.exact) return currentUrl === menuItem.url;
    return allEqual(
      [menuItem.url, currentUrl].map((url) => url.split('/').splice(1, programPattern.pathRange).join('/')),
    );
  });

  return findCurrentMenuList[findCurrentMenuList.length - 1] || undefined;
}

export default function getActiveMenuList(
  menuList: MenuType[],
  currentUrl: string,
  programPatternCheck: ProgramPattern = menuCheck,
) {
  const currentMenuFind = getCurrentMenu(menuList, currentUrl, programPatternCheck);
  if (!currentMenuFind) return [];

  const activeMenuList = [];
  let findMenu: MenuType | undefined = currentMenuFind;
  while (findMenu) {
    activeMenuList.push(findMenu);

    // eslint-disable-next-line no-loop-func
    findMenu = menuList.find((menuItem) => menuItem.menuId === findMenu?.parentMenuId);
  }

  return activeMenuList;
}
