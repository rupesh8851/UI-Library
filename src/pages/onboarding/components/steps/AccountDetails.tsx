import { Controller, useFormContext } from 'react-hook-form';

import { FormControl } from '../../../../components/common/FormControl.tsx';
import { FormErrorTextHelper } from '../../../../components/common/FormErrorTextHelper.tsx';
import { FormInput } from '../../../../components/common/FormInput.tsx';
import { FormLabel } from '../../../../components/common/FormLabel.tsx';
import { OnBoardingSteps } from '../../ts/enums.ts';
import { OnBoardingFormType } from '../../ts/types.ts';

export const AccountDetails = () => {
  const {
    trigger,
    control,
    formState: { errors },
  } = useFormContext<OnBoardingFormType>();

  const errorInStep = errors?.[OnBoardingSteps.ACCOUNT_DETAILS];

  return (
    <div className="flex flex-col w-full">
      <FormControl isInvalid={!!errorInStep?.name}>
        <FormLabel label="Name" />
        <Controller
          name={`${OnBoardingSteps.ACCOUNT_DETAILS}.name`}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <FormInput
                onChange={(value) => {
                  onChange(value);
                  trigger(`${OnBoardingSteps.ACCOUNT_DETAILS}.name`);
                }}
                value={value}
                placeholder="Enter the Name"
              />
            );
          }}
        />
        <FormErrorTextHelper message={errorInStep?.name?.message || ''} />
      </FormControl>
      <FormControl isInvalid={!!errorInStep?.companyName}>
        <FormLabel label="Company Name" />
        <Controller
          name={`${OnBoardingSteps.ACCOUNT_DETAILS}.companyName`}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <FormInput
                onChange={(value) => {
                  onChange(value);
                  trigger(`${OnBoardingSteps.ACCOUNT_DETAILS}.companyName`);
                }}
                value={value}
                placeholder="Enter the Company Name"
              />
            );
          }}
        />
        <FormErrorTextHelper
          message={errorInStep?.companyName?.message || ''}
        />
      </FormControl>
      <FormControl isInvalid={!!errorInStep?.phoneNumber}>
        <FormLabel label="Phone Number" />
        <Controller
          name={`${OnBoardingSteps.ACCOUNT_DETAILS}.phoneNumber`}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <FormInput
                onChange={(value) => {
                  onChange(value);
                  trigger(`${OnBoardingSteps.ACCOUNT_DETAILS}.phoneNumber`);
                }}
                value={value}
                placeholder="Enter the Phone Number"
              />
            );
          }}
        />
        <FormErrorTextHelper
          message={errorInStep?.phoneNumber?.message || ''}
        />
      </FormControl>
    </div>
  );
};
