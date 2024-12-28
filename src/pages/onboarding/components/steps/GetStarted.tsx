import { Controller, useFormContext } from 'react-hook-form';

import { FormControl } from '../../../../components/common/FormControl.tsx';
import { FormErrorTextHelper } from '../../../../components/common/FormErrorTextHelper.tsx';
import { FormInput } from '../../../../components/common/FormInput.tsx';
import { FormLabel } from '../../../../components/common/FormLabel.tsx';
import { OnBoardingSteps } from '../../ts/enums.ts';
import { OnBoardingFormType } from '../../ts/types.ts';

export const GetStarted = () => {
  const {
    trigger,
    control,
    formState: { errors },
  } = useFormContext<OnBoardingFormType>();

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
                onChange={(value) => {
                  onChange(value);
                  trigger(`${OnBoardingSteps.GET_STARTED}.projectName`);
                }}
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
