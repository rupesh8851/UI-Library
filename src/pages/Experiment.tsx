import { Divider } from '../components/common/Divider.tsx';
import { FormControl } from '../components/common/FormControl.tsx';
import { FormErrorTextHelper } from '../components/common/FormErrorTextHelper.tsx';
import { FormInput } from '../components/common/FormInput.tsx';
import { FormLabel } from '../components/common/FormLabel.tsx';
import { Stepper } from '../components/common/Stepper.tsx';

export const Experiment = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-lg  py-8 mx-auto mt-16 bg-white shadow-xl rounded-lg">
      <Stepper
        steps={['Personal details', 'Account Details', 'Strategy']}
        currentStep={0}
        width="150px"
      />
      <Divider />
      <FormControl isInvalid={false}>
        <FormLabel label="Name" />
        <FormInput value="" onChange={() => {}} placeholder="Enter the Name" />
        <FormErrorTextHelper message="Name is required" />
      </FormControl>
    </div>
  );
};
