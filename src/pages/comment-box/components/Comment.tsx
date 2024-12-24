// @flow

import { FC, useMemo, useState } from 'react';

import { CommentActions } from './CommentActions.tsx';
import { CommentBox } from './CommentBox.tsx';
import { OperationTypes } from '../ts/enums.ts';
import { CommentProps, CommentType } from '../ts/types.ts';

export const Comment: FC<CommentProps> = (props: CommentProps) => {
  const { comment, createComment, updateComment } = props;
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleCommentOperation = (newComment: CommentType) => {
    if (isEditing) {
      updateComment(newComment, comment.id);
    } else {
      createComment(newComment, comment.id);
    }
    setIsEditing(false);
    setIsReplying(false);
  };

  const initiateEditing = () => {
    setIsEditing(true);
    setIsReplying(false);
  };

  const initiateReplying = () => {
    setIsEditing(false);
    setIsReplying(true);
  };

  const handleCloseCommentBox = () => {
    setIsEditing(false);
    setIsReplying(false);
  };

  const showMessage = useMemo(() => {
    return !(isReplying || isEditing);
  }, [isReplying, isEditing]);

  return (
    <div className="pl-4 mt-4 border-l-2 border-slate-400 flex flex-col justify-start ">
      {!isEditing && (
        <div className="space-y-0.5 mb-1">
          <div className="w-fit flex space-x-1">
            <img
              alt="user_profile"
              src={comment.imageUrl}
              className="size-6 rounded-full"
            />
            <div className="max-w-fit px-2 text-md text-white font-semibold">
              {comment.userName}
            </div>
          </div>
          <div className="ml-8 mt-1 max-w-fit py-0.5 px-2 text-md bg-slate-100 rounded-md shadow-md">
            {comment.message}
          </div>
        </div>
      )}
      {!showMessage ? (
        <CommentBox
          comment={isEditing ? comment : undefined}
          operation={isEditing ? OperationTypes.UPDATE : OperationTypes.CREATE}
          createComment={handleCommentOperation}
          onClose={handleCloseCommentBox}
        />
      ) : (
        <CommentActions
          initiateEditAction={initiateEditing}
          initiateReplying={initiateReplying}
        />
      )}

      {comment.replies?.map((reply) => (
        <Comment
          key={reply.id}
          comment={reply}
          updateComment={updateComment}
          createComment={createComment}
        />
      ))}
    </div>
  );
};
