// @flow

import { useState } from 'react';

import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { TodoItemType } from '../ts/types.ts';

export const TodoItem = (props: TodoItemType) => {
  const { task, onUpdate, onDelete } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState('');

  const handleUpdate = () => {
    onUpdate({ ...task, label: value });
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="flex items-center w-full h-10 border-2 border-slate-400">
      {isEditing ? (
        <div className="flex items-center justify-between w-full h-full">
          <input
            className="w-full h-full"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={handleUpdate}
            className="h-full px-2 bg-slate-500 text-white "
          >
            Update
          </button>
        </div>
      ) : (
        <div className="flex items-center w-full h-full p-2">
          <div className="flex items-center w-3/4 h-full space-x-1">
            <input type="checkbox" />
            <div className="text-purple-500 text-sm"> {task.label} </div>
          </div>
          <div className="flex justify-around items-center w-1/4 h-full">
            <div
              className="size-6 shrink-0 cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              <BiEdit className="h-full w-full" />
            </div>
            <div
              className="size-6 shrink-0 cursor-pointer"
              onClick={handleDelete}
            >
              <RiDeleteBin6Line className="h-full w-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
