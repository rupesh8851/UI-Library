import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { Divider } from '../../../components/common/Divider.tsx';
import { FormWrapper } from '../../../components/common/FormWrapper.tsx';
import { Stepper } from '../../../components/common/Stepper.tsx';
import { onBoardingSteps } from '../ts/constants.ts';
import { OnBoardingSteps } from '../ts/enums.ts';
import { OnBoardingFormType, onBoardingSchema } from '../ts/types.ts';
import { AccountDetails } from './steps/AccountDetails.tsx';
import { Create } from './steps/Create.tsx';
import { GetStarted } from './steps/GetStarted.tsx';

type CreateProjectProps = {
  onCreate: (data: OnBoardingFormType) => void;
  onClose: () => void;
};
const steps = ['Get Started', 'Account Details', 'Create'];

// Later Elements in the DOM Are Stacked on Top
// Elements declared later in the DOM tree are rendered on top of those declared earlier
// Since the popup is declared after the overlay in the DOM, it will be stacked on top of the overlay by default,
// even without a z-index.

export const CreateProject = (props: CreateProjectProps) => {
  const { onCreate, onClose } = props;
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

  const onSubmit = (data: OnBoardingFormType) => {
    onCreate(data);
  };

  console.log({ errors });
  return (
    <div className="fixed inset-0">
      <div
        aria-describedby="Overlay"
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative z-10 left-2/3 top-1/2 w-2/5 -translate-x-2/3 -translate-y-1/2 bg-white shadow-2xl rounded-md overflow-hidden">
        <FormWrapper
          header={{
            onClose: onClose,
            headerText: 'Create New Project',
          }}
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
                <div className="flex px-4 flex-col w-full my-4">
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
    </div>
  );
};
