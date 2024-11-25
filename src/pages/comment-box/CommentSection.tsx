import { useState } from 'react';

import { Comment } from './components/Comment.tsx';
import { CommentBox } from './components/CommentBox.tsx';
import { OperationTypes } from './ts/enums.ts';
import { CommentType } from './ts/types.ts';

export const CommentSection = () => {
  const [comment, setComment] = useState<CommentType | null>(null);

  const updateTheTree = (
    root: CommentType,
    node: CommentType,
    id: string,
    isEditing: boolean,
  ) => {
    if (root.id === id) {
      if (isEditing) {
        root.message = node.message;
        return root;
      }
      root.replies.push(node);
      return root;
    }
    const rootReplies: CommentType[] = [];
    root.replies?.forEach((reply) => {
      rootReplies.push(updateTheTree(reply, node, id, isEditing));
    });
    root.replies = rootReplies;
    return root;
  };

  const onCreateComment = (comment: CommentType, parentId: string | null) => {
    if (parentId === null) {
      return setComment(comment);
    }
    setComment((prevComment) => {
      if (!prevComment) return null;
      return updateTheTree(prevComment, comment, parentId, false);
    });
  };

  const onUpdateComment = (comment: CommentType, id: string) => {
    setComment((prevComment) => {
      if (!prevComment) return null;
      return updateTheTree(prevComment, comment, id, true);
    });
  };

  console.log({ comment });
  return (
    <div className="ml-2">
      {comment ? (
        <Comment
          comment={comment}
          createComment={onCreateComment}
          updateComment={onUpdateComment}
        />
      ) : (
        <CommentBox
          operation={OperationTypes.CREATE}
          createComment={(comment) => onCreateComment(comment, null)}
        />
      )}
    </div>
  );
};
