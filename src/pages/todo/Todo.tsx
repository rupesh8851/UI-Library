// @flow

import { useState } from 'react';

import { IoAdd } from 'react-icons/io5';

import { TodoItem } from './components/TodoItem.tsx';
import { TaskType } from './ts/types.ts';

export const Todo = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: '32i9453242342',
      label: 'slkfjlsf sldkfjlsdf alskfj',
      checked: false,
    },
  ]);
  const [value, setValue] = useState<string>('');

  const createTask = () => {
    if (!value) return;
    const newTask: TaskType = {
      id: Date.now().toString(),
      label: value,
      checked: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="p-2 max-w-md mx-auto mt-20 bg-white shadow-md rounded-md space-y-4">
      <div className="text-xl text-slate-500 ">Task Tracker</div>
      <div className="flex items-center w-72 space-x-1 ">
        <input
          type="text"
          className="w-full border-2 h-10 border-slate-400 rounded-md px-2 focus:outline-slate-500 "
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className={`flex size-6 shrink-0 border-2 rounded-md ${value ? 'border-slate-500' : 'border-slate-200'}`}
          onClick={createTask}
          disabled={!value}
        >
          <IoAdd
            className={`w-full h-full  ${value ? 'stroke-slate-500' : 'stroke-slate-200'}`}
          />
        </button>
      </div>
      <div className="block w-72 space-y-2">
        {tasks.map((task: TaskType) => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={() => {}}
            onUpdate={() => {}}
          />
        ))}
      </div>
    </div>
  );
};
