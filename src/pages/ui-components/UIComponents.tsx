// @flow

import { FaSearchengin } from 'react-icons/fa';
import { GiAccordion } from 'react-icons/gi';
import { LuListTodo } from 'react-icons/lu';
import { RiCarouselView } from 'react-icons/ri';

import { DynamicSelect } from './components/auto-complete';
import { Tab } from '../../ts/types.ts';
import { Accordion } from './components/accordion/Accordion.tsx';
import { Carousel } from './components/carousel/Carousel.tsx';
import { Todo } from './components/todo/Todo.tsx';
import { Tabs } from '../../components/common/Tabs.tsx';

const tabs: Tab[] = [
  {
    label: 'AutoComplete',
    component: <DynamicSelect />,
    icon: FaSearchengin,
  },
  {
    label: 'Carousel',
    component: <Carousel />,
    icon: RiCarouselView,
  },
  {
    label: 'Todo',
    component: <Todo />,
    icon: LuListTodo,
  },
  {
    label: 'Accordion',
    component: <Accordion />,
    icon: GiAccordion,
  },
];

export const UIComponents = () => {
  return <Tabs tabs={tabs} />;
};
