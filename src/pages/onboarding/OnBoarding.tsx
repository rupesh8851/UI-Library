// @flow

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { AccountDetails } from './components/steps/AccountDetails.tsx';
import { Create } from './components/steps/Create.tsx';
import { GetStarted } from './components/steps/GetStarted.tsx';
import { onBoardingSteps } from './ts/constants.ts';
import { OnBoardingSteps } from './ts/enums.ts';
import { OnBoardingFormType, onBoardingSchema } from './ts/types.ts';
import { Divider } from '../../components/common/Divider.tsx';
import { FormWrapper } from '../../components/common/FormWrapper.tsx';
import { Stepper } from '../../components/common/Stepper.tsx';

const steps = ['Get Started', 'Account Details', 'Create'];
export const OnBoarding = () => {
  const formMethods = useForm<OnBoardingFormType>({
    resolver: zodResolver(onBoardingSchema),
  });
  const [activeStep, setActiveStep] = useState<number>(0);
  const {
    formState: { errors },
    trigger,
    handleSubmit,
  } = formMethods;

  const handleNext = async () => {
    const isCurrentStepValid = await trigger(`${onBoardingSteps[activeStep]}`);
    if (isCurrentStepValid) {
      if (activeStep === steps.length - 1) {
        await handleSubmit(onSubmit)();
      } else {
        setActiveStep((activeStep) => activeStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };

  const onSubmit = (data: OnBoardingFormType) => {};

  console.log({ errors });
  return (
    <div className="fixed left-2/3 top-1/2 w-2/5  -translate-x-2/3 -translate-y-1/2 bg-white px-4 py-2 shadow-xl rounded-md ">
      <FormWrapper
        footer={{
          slotStart: (
            <>
              {activeStep !== 0 && (
                <button
                  className="py-1 px-4 flex text-md text-white bg-purple-500 rounded-md hover:scale-110"
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
            </>
          ),
          slotEnd: (
            <>
              <button
                className="py-1 px-4 flex text-md text-white bg-purple-500 rounded-md hover:scale-110"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Create' : 'Next'}
              </button>
            </>
          ),
        }}
        content={
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-full justify-center items-center">
              <Stepper steps={steps} currentStep={activeStep} width="150px" />
              <Divider />
              <div className="flex flex-col w-full my-4">
                <FormProvider {...formMethods}>
                  {onBoardingSteps[activeStep] ===
                    OnBoardingSteps.GET_STARTED && <GetStarted />}
                  {onBoardingSteps[activeStep] ===
                    OnBoardingSteps.ACCOUNT_DETAILS && <AccountDetails />}
                  {onBoardingSteps[activeStep] === OnBoardingSteps.CREATE && (
                    <Create />
                  )}
                </FormProvider>
              </div>
            </div>
          </form>
        }
      />
    </div>
  );
};
