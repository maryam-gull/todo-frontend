import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddButtonClicked = () => {
    if (!todoName.trim()) return;
    onNewItem(todoName.trim(), dueDate);
    setDueDate("");
    setTodoName("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAddButtonClicked();
  };

  return (
    <div className="animate-scale-in">
      <label htmlFor="todo-input" className="block text-sm font-medium text-slate-700 mb-2">
        Add a new task
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id="todo-input"
          type="text"
          placeholder="What needs to be done?"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl bg-white text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-shadow"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          aria-label="Due date"
          className="px-4 py-2.5 border border-slate-200 rounded-xl bg-white text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-shadow sm:w-40"
        />
        <button
          type="button"
          onClick={handleAddButtonClicked}
          disabled={!todoName.trim()}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium rounded-xl shadow-md shadow-indigo-200/50 transition-all active:scale-[0.98]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
