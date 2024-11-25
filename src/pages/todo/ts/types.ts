export type TaskType = {
  id: string;
  label: string;
  checked: boolean;
};

export type TodoItemType = {
  task: TaskType;
  onUpdate: (task: TaskType) => void;
  onDelete: (id: string) => void;
};
