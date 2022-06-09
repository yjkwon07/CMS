export type MenuType = {
  url: string;
  menuId: string;
  parentMenuId: string;
  menuType: 'text' | 'icon' | 'button';
  menuName: string;
  menuIcon?: string;
  depth: number;
  pageDescription: string;
  target: boolean;
  show: boolean;
  ord: number;
  subMenuList: MenuType[] | [];
};

export type ProgramPattern = Record<
  string,
  {
    exact: boolean;
    pathRange?: number;
  }
>;
