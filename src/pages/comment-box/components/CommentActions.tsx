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
    <div className="ml-9 flex items-center space-x-2 ">
      <button
        className=" text-sm font-semibold text-purple-500 rounded-md hover:underline hover:underline-offset-2"
        onClick={initiateEditAction}
      >
        Edit
      </button>
      <button
        className=" text-sm font-semibold text-purple-500 rounded-md hover:underline hover:underline-offset-2"
        onClick={initiateReplying}
      >
        Reply
      </button>
    </div>
  );
};
