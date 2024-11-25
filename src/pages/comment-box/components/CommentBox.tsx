// @flow

import { FC, useEffect, useState } from 'react';

import { OperationTypes } from '../ts/enums.ts';
import { CommentBoxProps, CommentType } from '../ts/types.ts';

export const CommentBox: FC<CommentBoxProps> = (props) => {
  const { comment, createComment, operation, onClose } = props;

  const [message, setMessage] = useState<string>(comment?.message || '');

  const handleOperation = () => {
    const id = Date.now().toString();

    const newComment: CommentType = {
      id: comment?.id || id,
      userName: comment?.userName || 'John',
      userId: comment?.userId || id,
      message: message,
      replies: comment?.replies || [],
    };

    createComment(newComment);
  };

  useEffect(() => {
    setMessage(comment?.message || '');
  }, [comment?.message]);

  console.log('comment.message', comment?.message, 'state', message);

  return (
    <div
      className={`block p-2 bg-slate-400 w-80  space-y-1 rounded-md shadow-md`}
    >
      <textarea
        className="w-full h-20 border-gray-500"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex justify-end items-center space-x-2">
        <button
          className="py-2 px-4 bg-red-500 text-white rounded-md hover:scale-110 "
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="py-2 px-4 bg-green-700 text-white rounded-md hover:scale-110 "
          onClick={handleOperation}
        >
          {operation === OperationTypes.CREATE ? 'Create' : 'Update'}
        </button>
      </div>
    </div>
  );
};
