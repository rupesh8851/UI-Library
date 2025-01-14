import { useState } from 'react';

import { CreateProject } from './components/on-boarding-form/CreateProject.tsx';
import { Button } from '../../components/common/Button.tsx';

export const OnBoarding = () => {
  const [open, setOpen] = useState(false);

  const handleAddProject = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="h-24 mt-4 ml-4">
        <Button label="Create Project" onClick={() => setOpen(true)} />
      </div>
      {open && (
        <CreateProject
          onCreate={handleAddProject}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
};
