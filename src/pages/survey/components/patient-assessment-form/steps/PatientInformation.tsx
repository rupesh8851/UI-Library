// @flow

import { Controller, useFormContext } from 'react-hook-form';

import { FormControl } from '../../../../../components/common/FormControl.tsx';
import { FormErrorTextHelper } from '../../../../../components/common/FormErrorTextHelper.tsx';
import { FormInput } from '../../../../../components/common/FormInput.tsx';
import { FormLabel } from '../../../../../components/common/FormLabel.tsx';
import { PatientAssessmentSteps } from '../../../ts/enums.ts';
import { PatientAssessmentFormType } from '../../../ts/types.ts';

export const PatientInformation = () => {
  const {
    formState: { errors },
  } = useFormContext<PatientAssessmentFormType>();

  const errorStep = errors?.[PatientAssessmentSteps.PATIENT_INFORMATION];
  return (
    <div className="flex flex-col px-4 mt-4 space-y-2 w-full">
      <div className="flex justify-between">
        <FormControl isInvalid={!!errorStep?.firstName}>
          <FormLabel label="First Name" />
          <Controller
            name={`${PatientAssessmentSteps.PATIENT_INFORMATION}.firstName`}
            render={({ field: { onChange, value } }) => (
              <FormInput onChange={onChange} value={value} />
            )}
          />
          <FormErrorTextHelper message={errorStep?.firstName?.message || ''} />
        </FormControl>
        <FormControl isInvalid={!!errorStep?.lastName}>
          <FormLabel label="Last Name" />
          <Controller
            name={`${PatientAssessmentSteps.PATIENT_INFORMATION}.lastName`}
            render={({ field: { onChange, value } }) => (
              <FormInput onChange={onChange} value={value} />
            )}
          />
          <FormErrorTextHelper message={errorStep?.lastName?.message || ''} />
        </FormControl>
      </div>

      <div className="flex justify-between">
        <FormControl isInvalid={!!errorStep?.socialSecurityNumber}>
          <FormLabel label="Social Security number" />
          <Controller
            name={`${PatientAssessmentSteps.PATIENT_INFORMATION}.socialSecurityNumber`}
            render={({ field: { onChange, value } }) => (
              <FormInput onChange={onChange} value={value} />
            )}
          />
          <FormErrorTextHelper
            message={errorStep?.socialSecurityNumber?.message || ''}
          />
        </FormControl>
        <FormControl isInvalid={!!errorStep?.dob}>
          <FormLabel label="Date of birth" />
          <Controller
            name={`${PatientAssessmentSteps.PATIENT_INFORMATION}.dob`}
            render={({ field: { onChange, value } }) => (
              <FormInput type="date" onChange={onChange} value={value} />
            )}
          />
          <FormErrorTextHelper message={errorStep?.dob?.message || ''} />
        </FormControl>
      </div>
      <div>
        <FormControl isInvalid={!!errorStep?.concerns}>
          <FormLabel label="List any concerns you want to talk about during your visit" />
          <Controller
            name={`${PatientAssessmentSteps.PATIENT_INFORMATION}.concerns`}
            render={({ field: { onChange, value } }) => (
              <textarea
                className={`w-full min-h-20 px-4 py-2 resize-none rounded-md shadow-sm  border-2 border-slate-200 focus:outline-offset-2 focus:outline-purple-500`}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </FormControl>
      </div>
    </div>
  );
};
