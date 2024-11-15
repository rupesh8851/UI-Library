import { AlertType } from './enums.ts';

export interface Alert {
  title: string;
  description: string;
  type: AlertType;
}

export interface AlertProps extends Alert {
  id: string;
}
