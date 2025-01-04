import { AssessmentForm } from './AssessmentForm.tsx';
import { OnBoarding } from './OnBoarding.tsx';
import { Tabs } from '../../components/common/Tabs.tsx';

export const SurveyPage = () => {
  const tabs = [
    {
      label: 'Onboarding',
      component: <OnBoarding />,
    },
    {
      label: 'Assessment Form',
      component: <AssessmentForm />,
    },
  ];

  return <Tabs tabs={tabs} />;
};
