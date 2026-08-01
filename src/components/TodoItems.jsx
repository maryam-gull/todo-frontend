import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick, onCompleteClick, emptyMessage }) => {
  if (todoItems.length === 0) {
    return (
      <p className="text-sm text-slate-400 italic py-3 px-1">
        {emptyMessage || "Nothing here yet."}
      </p>
    );
  }

  return (
    <div className="space-y-2.5 mt-3">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id || item.name}
          id={item.id}
          todoName={item.name}
          todoDate={item.dueDate}
          completed={item.completed}
          onDeleteClick={onDeleteClick}
          onCompleteClick={onCompleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
