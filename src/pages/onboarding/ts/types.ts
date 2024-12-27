import { z } from 'zod';

import { OnBoardingSteps } from './enums.ts';

export const onBoardingSchema = z.object({
  [OnBoardingSteps.GET_STARTED]: z.object({
    projectName: z.string().min(1, { message: 'Enter the Project Name' }),
  }),
  [OnBoardingSteps.ACCOUNT_DETAILS]: z.object({
    name: z.string().min(1, { message: 'Name is Required' }),
    companyName: z.string().min(1, { message: 'Company name is Required' }),
    phoneNumber: z.number().min(1, { message: 'Phone number is Required' }),
  }),
  [OnBoardingSteps.CREATE]: z.object({
    email: z.string().email('Invalid email format'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(64, 'Password must not exceed 64 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(
        /[@$!%*?&#]/,
        'Password must contain at least one special character',
      ),
    confirmPassword: z
      .string()
      .min(8, 'Confirm password must be at least 8 characters long'),
  }),
});

export type OnBoardingFormType = z.infer<typeof onBoardingSchema>;
