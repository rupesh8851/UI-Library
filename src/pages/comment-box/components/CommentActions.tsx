// @flow

type CommentActions = {
  initiateEditAction: () => void;
  initiateReplying: () => void;
};

export const CommentActions = ({
  initiateEditAction,
  initiateReplying,
}: CommentActions) => {
  return (
    <div className="flex items-center justify-start space-x-1">
      <button onClick={initiateEditAction}> Edit</button>
      <button onClick={initiateReplying}> Reply</button>
    </div>
  );
};
