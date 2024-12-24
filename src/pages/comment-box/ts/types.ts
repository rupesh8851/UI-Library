import { OperationTypes } from './enums.ts';

export type CommentType = {
  id: string;
  userId: string;
  userName: string;
  message: string;
  imageUrl: string;
  replies: CommentType[];
};

export type CommentProps = {
  comment: CommentType;
  createComment: (comment: CommentType, parentId: string) => void;
  updateComment: (comment: CommentType, id: string) => void;
};

export type CommentBoxProps = {
  onClose?: () => void;
  operation: OperationTypes;
  comment?: CommentType;
  createComment: (comment: CommentType) => void;
};
