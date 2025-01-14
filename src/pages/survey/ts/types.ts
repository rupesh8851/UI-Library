import { z } from 'zod';

import { OnBoardingSteps, PatientAssessmentSteps } from './enums.ts';

export const onBoardingSchema = z.object({
  [OnBoardingSteps.GET_STARTED]: z.object({
    projectName: z.string().min(1, { message: 'Enter the Project Name' }),
  }),
  [OnBoardingSteps.ACCOUNT_DETAILS]: z.object({
    name: z.string().min(1, { message: 'Name is Required' }),
    companyName: z.string().min(1, { message: 'Company Name is Required' }),
    phoneNumber: z
      .string()
      .refine((val) => val.trim().length > 0, {
        message: 'Phone number cannot be empty.',
      })
      .refine(
        (val) => {
          const validCharsRegex = /^[+\d\s()-]*$/;
          return validCharsRegex.test(val);
        },
        {
          message:
            'Phone number contains invalid characters. Only numbers are allowed.',
        },
      )
      .refine(
        (val) => {
          return val.length >= 7 && val.length <= 15;
        },
        {
          message: 'Phone number must be between 7 and 15 characters long.',
        },
      )
      .refine(
        (val) => {
          const digitsOnly = val.replace(/[^0-9]/g, '');
          return digitsOnly.length >= 7 && digitsOnly.length <= 15;
        },
        {
          message: 'Phone number must contain between 7 and 15 numeric digits.',
        },
      ),
  }),
  [OnBoardingSteps.CREATE]: z
    .object({
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
    })
    .refine(
      (val) => {
        return val.confirmPassword === val.password;
      },
      { path: ['confirmPassword'], message: 'Password is not matching' },
    ),
});

export type OnBoardingFormType = z.infer<typeof onBoardingSchema>;

export const patientAssessmentSchema = z.object({
  [PatientAssessmentSteps.PATIENT_INFORMATION]: z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    socialSecurityNumber: z.string().regex(/^\d{9}$/, {
      message: 'Your SSN must be a 9-digit number',
    }),
    dob: z.string().optional(),
    concerns: z.string().optional(),
  }),
  [PatientAssessmentSteps.HEALTH_HISTORY]: z.object({
    diabetes: z.boolean(),
    bloodPressure: z.boolean(),
    highCholesterol: z.boolean(),
    otherHealthConcerns: z.string().optional(),
  }),
  [PatientAssessmentSteps.SOCIAL_HISTORY]: z.object({
    smoker: z.object({}),
  }),
  [PatientAssessmentSteps.SURGICAL_HISTORY]: z.object({
    surgicalHistory: z.string().optional(),
  }),
  [PatientAssessmentSteps.FAMILY_HISTORY]: z.object({
    familyHistory: z.array(
      z.object({
        relation: z.string(),
        healthCondition: z.string(),
        familyHistoryOfCancer: z.string(),
      }),
    ),
  }),
  [PatientAssessmentSteps.SYMPTOMS]: z.object({
    pastSymptoms: z.array(z.string()),
    signature: z.string(),
    dateOfSignature: z.string(),
  }),
});

export type PatientAssessmentFormType = z.infer<typeof patientAssessmentSchema>;
