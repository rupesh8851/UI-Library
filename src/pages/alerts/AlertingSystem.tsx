// @flow

import { useEffect, useState } from 'react';

import { AlertItem } from './components/AlertItem.tsx';
import { MAX_ALERTS } from './ts/constant.ts';
import { AlertType } from './types/enums.ts';
import { Alert, AlertProps } from './types/types.ts';

interface AlertingSystemProps {
  alerts: AlertProps[];
  queue: AlertProps[];
}

export const AlertingSystem = () => {
  const [alertDetails, setAlertDetails] = useState<AlertingSystemProps>({
    alerts: [],
    queue: [],
  });

  const addAlert = (alertDetail: Alert) => {
    const alert: AlertProps = { id: Date.now().toString(), ...alertDetail };

    setAlertDetails((prevAlerts) => {
      return { ...prevAlerts, queue: [...prevAlerts.queue, alert] };
    });
  };

  const onRemoveAlert = (alertId: string) => {
    setAlertDetails((prevAlerts) => {
      const alerts = prevAlerts?.alerts?.filter(
        (alert) => alert.id !== alertId,
      );
      return { ...prevAlerts, alerts: alerts };
    });
  };

  useEffect(() => {
    if (alertDetails.alerts?.length < MAX_ALERTS && alertDetails.queue.length) {
      const queue = [...alertDetails.queue];
      const alert = queue.shift();
      setAlertDetails((prevAlerts) => {
        return {
          alerts: [...prevAlerts.alerts, alert as AlertProps],
          queue: queue,
        };
      });
    }
  }, [alertDetails]);

  const createAlert = () => {
    const alertDetail: Alert = {
      title: 'Success Alert',
      description: 'we have created the alert Successfully',
      type: AlertType.SUCCESS,
    };
    addAlert(alertDetail);
  };

  return (
    <div className="relative h-full w-full">
      <button
        className="absolute top-8 left-8 flex p-2 shadow-xl bg-slate-400 text-white rounded-md hover:scale-110 active:ring-2 active:ring-offset-1 active:ring-slate-500"
        onClick={createAlert}
      >
        + Add Alerts
      </button>
      <div className="absolute top-8 right-2 block space-y-4">
        {alertDetails?.alerts?.map((alert) => {
          return (
            <AlertItem
              key={alert.id}
              id={alert.id}
              title={alert.title}
              description={alert.description}
              type={alert.type}
              close={onRemoveAlert}
            />
          );
        })}
      </div>
    </div>
  );
};
