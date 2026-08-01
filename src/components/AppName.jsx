function AppName({ activeCount, completedCount }) {
  const total = activeCount + completedCount;

  return (
    <header className="text-center mb-8 animate-fade-in-up">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        Your Todo List
      </h1>
      <p className="text-slate-500 mt-2 text-sm sm:text-base">
        Plan your day, one task at a time
      </p>
      {total > 0 && (
        <div className="flex items-center justify-center gap-3 mt-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            {activeCount} active
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {completedCount} done
          </span>
        </div>
      )}
    </header>
  );
}

export default AppName;
