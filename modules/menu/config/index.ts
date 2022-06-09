import flatten from '@/utils/flatten';

import { MenuType, ProgramPattern } from '../@types';

const DEPTH1_1 = {
  url: '/',
  menuId: 'home',
  parentMenuId: '',
  menuType: 'icon',
  menuName: '홈',
  // menuIcon: 홈아이콘이미지,
  depth: 1,
  pageDescription: '',
  target: false,
  show: true,
  ord: 1,
  subMenuList: [],
};

const DEPTH1_2 = {
  url: '/issue',
  menuId: 'issue',
  parentMenuId: '',
  menuType: 'icon',
  menuName: '이슈',
  // menuIcon: 이슈아이콘이미지,
  depth: 1,
  pageDescription: '',
  target: false,
  show: true,
  ord: 2,
  subMenuList: [],
};

const DEPTH1_3 = {
  url: '/like',
  menuId: 'like',
  parentMenuId: '',
  menuType: 'icon',
  menuName: '좋아요',
  // menuIcon: 좋아요아이콘이미지,
  depth: 1,
  pageDescription: '',
  target: false,
  show: true,
  ord: 3,
  subMenuList: [],
};

const DEPTH1_4 = {
  url: '/more',
  menuId: 'more',
  parentMenuId: '',
  menuType: 'icon',
  menuName: '더보기',
  // menuIcon: 더보기아이콘이미지,
  depth: 1,
  pageDescription: '',
  target: false,
  show: true,
  ord: 4,
  subMenuList: [],
};

export const menuList = [DEPTH1_1, DEPTH1_2, DEPTH1_3, DEPTH1_4] as MenuType[];
export const menuFlattenList = flatten(menuList, 'subMenuList') as MenuType[];

export const menuCheck: ProgramPattern = {
  issue: {
    exact: true,
  },
  like: {
    exact: true,
  },
  more: {
    exact: true,
  },
};
