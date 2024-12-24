// @flow

import { FC, useCallback, useEffect, useState } from 'react';

import { RxCross2 } from 'react-icons/rx';

import { generateRandomName, getRandomUserPic } from '../../../ts/utils.ts';
import { OperationTypes } from '../ts/enums.ts';
import { CommentBoxProps, CommentType } from '../ts/types.ts';

export const CommentBox: FC<CommentBoxProps> = (props) => {
  const { comment, createComment, operation, onClose } = props;

  const [message, setMessage] = useState<string>(comment?.message || '');

  const handleOperation = useCallback(() => {
    const id = Date.now().toString();

    const newComment: CommentType = {
      id: comment?.id || id,
      userName: comment?.userName || generateRandomName(),
      userId: comment?.userId || id,
      message: message,
      replies: comment?.replies || [],
      imageUrl: getRandomUserPic(),
    };

    createComment(newComment);
  }, [comment, message]);

  useEffect(() => {
    setMessage(comment?.message || '');
  }, [comment?.message]);

  console.log('comment.message', comment?.message, 'state', message);

  return (
    <div
      className={`block p-1 mt-2  bg-white max-w-sm  relative space-y-1 rounded-md shadow-md border-2 border-purple-500`}
    >
      <textarea
        className="w-full h-20 p-2 border-gray-500 focus:outline-none resize-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Add your comment here..."
      />
      <button
        className="absolute top-0 right-2  text-xl text-slate-500  hover:scale-110 "
        onClick={onClose}
      >
        <RxCross2 />
      </button>
      <div className="flex justify-end items-center space-x-2">
        <button
          className="py-1 px-4 bg-purple-700 text-white rounded-md hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
          onClick={handleOperation}
          disabled={!message}
        >
          {operation === OperationTypes.CREATE ? 'Post' : 'Update'}
        </button>
      </div>
    </div>
  );
};
