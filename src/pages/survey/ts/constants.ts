import { OnBoardingSteps, PatientAssessmentSteps } from './enums.ts';

export const onBoardingSteps: OnBoardingSteps[] = [
  OnBoardingSteps.GET_STARTED,
  OnBoardingSteps.ACCOUNT_DETAILS,
  OnBoardingSteps.CREATE,
];

export const patientAssessmentSteps: PatientAssessmentSteps[] = [
  PatientAssessmentSteps.PATIENT_INFORMATION,
  PatientAssessmentSteps.HEALTH_HISTORY,
  PatientAssessmentSteps.SOCIAL_HISTORY,
  PatientAssessmentSteps.SURGICAL_HISTORY,
  PatientAssessmentSteps.FAMILY_HISTORY,
  PatientAssessmentSteps.SYMPTOMS,
];
