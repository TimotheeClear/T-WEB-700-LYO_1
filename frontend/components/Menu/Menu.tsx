import React, { useState } from 'react';
import {
  CategoriesIcon,
  DashboardIcon,
  DatabaseIcon,
  OtherDataIcon,
  ReportsIcon,
} from '../Icons';
import { MenuItem } from './MenuItem';

export const MENU = [
  {
    label: 'Dashboard',
    href: '#',
    getIcon: DashboardIcon,
  },
  {
    label: 'Categories',
    href: '#',
    getIcon: CategoriesIcon,
  },
  {
    label: 'Reports',
    href: '#',
    getIcon: ReportsIcon,
  },
  {
    label: 'Other Data',
    href: '#',
    getIcon: OtherDataIcon,
  },
  {
    label: 'Database',
    href: '#',
    getIcon: DatabaseIcon,
  },
];

export const Menu = () => {
  const selection = MENU.map((element) => {
    return {
      label: element.label,
      selected: false,
    };
  });
  const [selected, setSelected] = useState(selection);

  const changeSelection = (label: string) => {
    setSelected(
      selected.map((element) => {
        if (element.label === label) {
          return {
            ...element,
            selected: true,
          };
        } else {
          return {
            ...element,
            selected: false,
          };
        }
      })
    );
  };

  return (
    <ul className="mt-6 space-y-2 tracking-wide">
      {MENU.map((item) => {
        return (
          <MenuItem
            key={item.label}
            {...item}
            menuSelection={selected}
            changeSelection={changeSelection}
          />
        );
      })}
    </ul>
  );
};
