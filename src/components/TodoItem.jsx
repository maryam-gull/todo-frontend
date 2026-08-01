function formatDueDate(dateStr) {
  if (!dateStr) return null;
  const date = new Date(dateStr + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.getTime() === today.getTime()) return { label: "Today", urgent: true };
  if (date.getTime() === tomorrow.getTime()) return { label: "Tomorrow", urgent: false };
  if (date < today) return { label: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }), overdue: true };

  return {
    label: date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    urgent: false,
  };
}

function TodoItem({ id, todoName, todoDate, onDeleteClick, onCompleteClick, completed }) {
  const due = formatDueDate(todoDate);

  return (
    <div
      className={`group flex items-center gap-4 bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-200 animate-fade-in-up ${
        completed ? "opacity-75" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={!!completed}
        onChange={() => onCompleteClick && onCompleteClick(id)}
        className="todo-checkbox mt-0.5"
        disabled={!!completed}
        aria-label={completed ? "Completed" : "Mark as complete"}
      />

      <div className="flex-1 min-w-0">
        <div
          className={`font-medium truncate ${
            completed ? "line-through text-slate-400" : "text-slate-800"
          }`}
        >
          {todoName}
        </div>
        {due ? (
          <div className="flex items-center gap-1.5 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-3.5 h-3.5 ${due.overdue ? "text-red-400" : "text-slate-400"}`}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span
              className={`text-xs font-medium ${
                due.overdue
                  ? "text-red-500"
                  : due.urgent
                    ? "text-amber-600"
                    : "text-slate-500"
              }`}
            >
              {due.overdue ? "Overdue · " : ""}
              {due.label}
            </span>
          </div>
        ) : (
          <div className="text-xs text-slate-400 mt-1">No due date</div>
        )}
      </div>

      <button
        type="button"
        onClick={() => onDeleteClick(id)}
        aria-label="Delete task"
        className="opacity-0 group-hover:opacity-100 focus:opacity-100 p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </div>
  );
}

export default TodoItem;
