import { GiAccordion } from 'react-icons/gi';

import { UI_COMPONENT } from './enums.ts';
import { SideBarProps } from './types.ts';

export const getAllUIComponents = (uiComponent: UI_COMPONENT): SideBarProps => {
  switch (uiComponent) {
    case UI_COMPONENT.ACCORDION:
      return {
        label: 'Accordion',
        value: UI_COMPONENT.ACCORDION,
        icon: GiAccordion,
      };
    case UI_COMPONENT.INFINITE_SCROLL:
      return {
        label: 'Infinite Scroll',
        value: UI_COMPONENT.INFINITE_SCROLL,
      };
  }
};
