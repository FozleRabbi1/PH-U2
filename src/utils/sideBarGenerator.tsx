import { NavLink } from "react-router-dom";
import { TSidebarItem } from "../routes/admin.routes";
import { TUserPath } from "../types";

export const sideBarGenerator = (item: TUserPath[], role: string) => {
  const sideBarItems = item.reduce((acc: TSidebarItem[], item) => {
    if (item.element && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return sideBarItems;
};
