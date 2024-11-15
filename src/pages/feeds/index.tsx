import { FeedsUsingApiObserver } from './FeedsUsingApiObserver.tsx';
import { FeedsUsingProperty } from './FeedsUsingProperty.tsx';
import { Tabs } from '../../components/Tabs.tsx';
import { Tab } from '../../ts/types.ts';

export const FeedsWrapper = () => {
  const tabs: Tab[] = [
    {
      label: 'Feeds',
      component: <FeedsUsingProperty />,
    },
    {
      label: 'FeedsWithObserver',
      component: <FeedsUsingApiObserver />,
    },
  ];

  return <Tabs tabs={tabs} />;
};
