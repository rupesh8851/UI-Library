// @flow

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { patientAssessmentSteps } from './ts/constants.ts';
import { PatientAssessmentSteps } from './ts/enums.ts';
import {
  PatientAssessmentFormType,
  patientAssessmentSchema,
} from './ts/types.ts';
import { Button } from '../../components/common/Button.tsx';
import { Divider } from '../../components/common/Divider.tsx';
import { FormWrapper } from '../../components/common/FormWrapper.tsx';
import { Stepper } from '../../components/common/Stepper.tsx';
import { FamilyHistory } from './components/patient-assessment-form/steps/FamilyHistory.tsx';
import { HealthHistory } from './components/patient-assessment-form/steps/HealthHistory.tsx';
import { PatientInformation } from './components/patient-assessment-form/steps/PatientInformation.tsx';
import { SocialHistory } from './components/patient-assessment-form/steps/SocialHistory.tsx';
import { SurgicalHistory } from './components/patient-assessment-form/steps/SurgicalHistory.tsx';
import { Symptoms } from './components/patient-assessment-form/steps/Symptoms.tsx';

const steps = [
  'Patient Information',
  'Health History',
  'Social History',
  'Surgery History',
  'Family History',
  'Prevention Care',
  'Symptoms',
];

export const AssessmentForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const formMethods = useForm<PatientAssessmentFormType>({
    resolver: zodResolver(patientAssessmentSchema),
  });
  const { trigger, setValue } = formMethods;

  const handleBack = () => {
    setCurrentStep(() => currentStep - 1);
  };

  const handleNext = async () => {
    const isStepValid = await trigger(`${patientAssessmentSteps[currentStep]}`);
    if (isStepValid) {
      setCurrentStep(() => currentStep + 1);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col ">
      <div className="mt-4 ml-4">
        <Button onClick={() => setIsOpen(true)} label="Fill Assessment" />
      </div>
      {isOpen && (
        <FormWrapper
          footer={{
            slotStart: (
              <>
                {!!currentStep && <Button label="Back" onClick={handleBack} />}
              </>
            ),
            slotEnd: (
              <Button
                label={currentStep === steps.length - 1 ? 'Create' : 'Next'}
                onClick={handleNext}
              />
            ),
          }}
          headerText="Patient Assessment Form"
          content={
            <form>
              <div className="flex flex-col w-full justify-center items-center">
                <Stepper
                  steps={steps}
                  currentStep={currentStep}
                  width="120px"
                />
                <Divider />
                <FormProvider {...formMethods}>
                  {patientAssessmentSteps[currentStep] ===
                    PatientAssessmentSteps.PATIENT_INFORMATION && (
                    <PatientInformation />
                  )}
                  {patientAssessmentSteps[currentStep] ===
                    PatientAssessmentSteps.HEALTH_HISTORY && <HealthHistory />}
                  {patientAssessmentSteps[currentStep] ===
                    PatientAssessmentSteps.SOCIAL_HISTORY && <SocialHistory />}
                  {patientAssessmentSteps[currentStep] ===
                    PatientAssessmentSteps.SURGICAL_HISTORY && (
                    <SurgicalHistory />
                  )}
                  {patientAssessmentSteps[currentStep] ===
                    PatientAssessmentSteps.FAMILY_HISTORY && <FamilyHistory />}
                  {patientAssessmentSteps[currentStep] ===
                    PatientAssessmentSteps.SYMPTOMS && <Symptoms />}
                </FormProvider>
              </div>
            </form>
          }
          width="w-2/3"
          onClose={handleClose}
        />
      )}
    </div>
  );
};
