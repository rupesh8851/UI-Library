import { ReactNode } from 'react';

import { IconType } from 'react-icons';

import { UI_COMPONENT } from './enums.ts';

export interface SideBarProps {
  label: string;
  value: UI_COMPONENT;
  icon?: IconType;
}

export type IconsProps = {
  isActive?: boolean;
  size: number;
};

export type FeedsPageProps = {
  postLink: string;
  title: string;
  url: string;
  author: string;
};

export type Tab = {
  label: string;
  component?: ReactNode;
  icon?: IconType;
};
