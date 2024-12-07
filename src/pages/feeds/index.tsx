import { FaInstagram } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

import { FeedsUsingApiObserver } from './FeedsUsingApiObserver.tsx';
import { FeedsUsingProperty } from './FeedsUsingProperty.tsx';
import { Tabs } from '../../components/common/Tabs.tsx';
import { Tab } from '../../ts/types.ts';

export const FeedsWrapper = () => {
  const tabs: Tab[] = [
    {
      label: 'Instagram',
      component: <FeedsUsingProperty />,
      icon: FaInstagram,
    },
    {
      label: 'Threads',
      component: <FeedsUsingApiObserver />,
      icon: FaThreads,
    },
  ];

  return <Tabs tabs={tabs} />;
};
