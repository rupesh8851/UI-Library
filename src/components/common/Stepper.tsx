import { IoIosCheckmarkCircle } from 'react-icons/io';

type StepperProps = {
  steps: string[];
  currentStep: number;
  width?: string;
};

export const Stepper = (props: StepperProps) => {
  const { steps, currentStep, width = '100px' } = props;

  return (
    <div className="flex items-center w-fit mb-8">
      {steps.map((step, index) => {
        const isFirst = index === 0;
        const isLast = index === steps.length - 1;
        const isActive = index === currentStep;

        return (
          <div className={`flex items-center w-[${width}]`} key={step}>
            {!isFirst && (
              <div
                className={`flex h-0.5 bg-slate-200`}
                style={{ width: `calc((${width} - 30px)/2)` }}
              ></div>
            )}

            <div className="flex flex-col relative">
              <div className="flex h-[30px] w-[30px] justify-center items-center rounded-full border border-slate-200">
                {index < currentStep ? (
                  <IoIosCheckmarkCircle className="size-5 fill-purple-500" />
                ) : (
                  <span className="text-black">{index + 1}</span>
                )}
              </div>
              <div
                className={`absolute top-8 text-sm  whitespace-nowrap ${isActive ? 'text-slate-700' : 'text-slate-400'} `}
                style={{ transform: `translateX(calc(-50% + 15px))` }}
              >
                {step}
              </div>
            </div>

            {!isLast && (
              <div
                className={`flex h-0.5 bg-slate-200`}
                style={{ width: `calc((${width} - 30px)/2)` }}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
