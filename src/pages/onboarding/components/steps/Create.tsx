import { Controller, useFormContext } from 'react-hook-form';

import { FormControl } from '../../../../components/common/FormControl.tsx';
import { FormErrorTextHelper } from '../../../../components/common/FormErrorTextHelper.tsx';
import { FormInput } from '../../../../components/common/FormInput.tsx';
import { FormLabel } from '../../../../components/common/FormLabel.tsx';
import { OnBoardingSteps } from '../../ts/enums.ts';
import { OnBoardingFormType } from '../../ts/types.ts';

export const Create = () => {
  const {
    trigger,
    control,
    formState: { errors },
  } = useFormContext<OnBoardingFormType>();

  const errorInStep = errors?.[OnBoardingSteps.CREATE];

  return (
    <div className="flex flex-col w-full">
      <FormControl isInvalid={!!errorInStep?.email}>
        <FormLabel label="Email Id" />
        <Controller
          name={`${OnBoardingSteps.CREATE}.email`}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <FormInput
                onChange={(value) => {
                  onChange(value);
                  trigger(`${OnBoardingSteps.CREATE}.email`);
                }}
                value={value}
                placeholder="Enter the Email Id"
              />
            );
          }}
        />
        <FormErrorTextHelper message={errorInStep?.email?.message || ''} />
      </FormControl>
      <FormControl isInvalid={!!errorInStep?.password}>
        <FormLabel label="Password" />
        <Controller
          name={`${OnBoardingSteps.CREATE}.password`}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <FormInput
                onChange={(value) => {
                  onChange(value);
                  trigger(`${OnBoardingSteps.CREATE}.password`);
                }}
                value={value}
                placeholder="Create the Password"
              />
            );
          }}
        />
        <FormErrorTextHelper message={errorInStep?.password?.message || ''} />
      </FormControl>
      <FormControl isInvalid={!!errorInStep?.confirmPassword}>
        <FormLabel label="Confirm Password" />
        <Controller
          name={`${OnBoardingSteps.CREATE}.confirmPassword`}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <FormInput
                onChange={(value) => {
                  onChange(value);
                  trigger(`${OnBoardingSteps.CREATE}.confirmPassword`);
                }}
                value={value}
                placeholder="Confirm the Password"
              />
            );
          }}
        />
        <FormErrorTextHelper
          message={errorInStep?.confirmPassword?.message || ''}
        />
      </FormControl>
    </div>
  );
};
