import { useState } from 'react';

import { CreateProject } from './components/on-boarding-form/CreateProject.tsx';

export const OnBoarding = () => {
  const [open, setOpen] = useState(false);

  const handleAddProject = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="h-24 mt-4 ml-4">
        <button
          className="py-1 px-2 bg-purple-500 shadow-xl text-md text-white rounded-md  hover:scale-105 active:ring-2 active:ring-offset-1 active:ring-purple-500"
          onClick={() => setOpen(true)}
        >
          Create Project
        </button>
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
