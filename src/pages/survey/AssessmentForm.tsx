// @flow

import { useState } from 'react';

import { Button } from '../../components/common/Button.tsx';

export const AssessmentForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col ">
      <div className="mt-4 ml-4">
        <Button onClick={() => setIsOpen(true)} label="Fill Assessment" />
      </div>
    </div>
  );
};
