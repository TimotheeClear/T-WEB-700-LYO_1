import Link from 'next/link';
import React from 'react';
import ClassNames from '../../../utils/ClassNames/ClassNames';

interface SelectItem {
  label: string;
  selected: boolean;
}

interface MenuItemProps {
  label: string;
  href: string;
  menuSelection: SelectItem[] | null;
  changeSelection: (label: string) => void;
  getIcon?: () => React.ReactNode;
}

export const MenuItem = (props: MenuItemProps) => {
  const { label, menuSelection, href, getIcon, changeSelection } = props;

  const isSelected = menuSelection?.find((e) => e.label === label)?.selected;
  const iconElement = getIcon ? getIcon() : null;

  const handleClick = () => {
    if (!isSelected) {
      changeSelection(label);
    }
  };

  return (
    <>
      <li className="min-w-max" onClick={handleClick}>
        <Link href={href}>
          <a
            aria-label={label}
            className={ClassNames(
              'relative flex items-center space-x-4',
              isSelected
                ? 'bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white'
                : 'bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600'
            )}
          >
            {iconElement}
            <span className="-mr-1 font-medium">{label}</span>
          </a>
        </Link>
      </li>
    </>
  );
};
