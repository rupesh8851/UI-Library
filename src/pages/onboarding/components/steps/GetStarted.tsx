import { Controller, useFormContext } from 'react-hook-form';

import { FormControl } from '../../../../components/common/FormControl.tsx';
import { FormErrorTextHelper } from '../../../../components/common/FormErrorTextHelper.tsx';
import { FormInput } from '../../../../components/common/FormInput.tsx';
import { FormLabel } from '../../../../components/common/FormLabel.tsx';
import { OnBoardingSteps } from '../../ts/enums.ts';
import { OnBoardingFormType } from '../../ts/types.ts';

export const GetStarted = () => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext<OnBoardingFormType>();

  console.log({ errors }, watch());
  const errorInStep = errors?.[OnBoardingSteps.GET_STARTED];

  return (
    <div className="flex flex-col w-full">
      <FormControl isInvalid={!!errorInStep?.projectName}>
        <FormLabel label="Project Name" />
        <Controller
          name={`${OnBoardingSteps.GET_STARTED}.projectName`}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <FormInput
                onChange={onChange}
                value={value}
                placeholder="Enter the Project Name"
              />
            );
          }}
        />
        <FormErrorTextHelper
          message={errorInStep?.projectName?.message || ''}
        />
      </FormControl>
    </div>
  );
};
