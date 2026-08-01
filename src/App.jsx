import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { deleteItemFromServer, addItemToServer, getItemFromServer, markItemCompletedOnServer } from "./services/itemServices";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemFromServer().then((initialItems) => {
      setTodoItems(initialItems);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    const item = await addItemToServer(itemName, itemDueDate);
    if (item) {
      setTodoItems((prevItems) => [...prevItems, item]);
    }
  };

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteItemFromServer(id);
    const newTodoItems = todoItems.filter((item) => item.id !== deletedId);
    setTodoItems(newTodoItems);
  };

  const handleMarkCompleted = async (id) => {
    const updated = await markItemCompletedOnServer(id);
    if (!updated) return;
    setTodoItems((prev) => prev.map((it) => (it.id === id ? updated : it)));
  };

  const activeItems = todoItems.filter((i) => !i.completed);
  const completedItems = todoItems.filter((i) => i.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/40 to-violet-50/30 py-10 sm:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <AppName activeCount={activeItems.length} completedCount={completedItems.length} />

        <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl shadow-xl shadow-slate-200/60 p-6 sm:p-8 animate-scale-in">
          <AddTodo onNewItem={handleNewItem} />

          {todoItems.length === 0 && <WelcomeMessage />}

          {todoItems.length > 0 && (
            <>
              <section className="mt-8">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Active
                  </h2>
                  <span className="text-xs font-medium bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                    {activeItems.length}
                  </span>
                </div>
                <TodoItems
                  todoItems={activeItems}
                  onDeleteClick={handleDeleteItem}
                  onCompleteClick={handleMarkCompleted}
                  emptyMessage="All caught up — no active tasks!"
                />
              </section>

              {completedItems.length > 0 && (
                <section className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                      Completed
                    </h2>
                    <span className="text-xs font-medium bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                      {completedItems.length}
                    </span>
                  </div>
                  <TodoItems
                    todoItems={completedItems}
                    onDeleteClick={handleDeleteItem}
                    emptyMessage="No completed tasks yet."
                  />
                </section>
              )}
            </>
          )}
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          {todoItems.length > 0
            ? `${activeItems.length} of ${todoItems.length} tasks remaining`
            : "Stay focused, stay productive"}
        </p>
      </div>
    </div>
  );
}

export default App;
