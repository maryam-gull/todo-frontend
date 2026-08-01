const WelcomeMessage = () => {
  return (
    <div className="text-center py-10 animate-scale-in">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-slate-400 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      </div>
      <p className="text-slate-600 font-medium">No tasks yet</p>
      <p className="text-slate-400 text-sm mt-1">Add your first task above to get started</p>
    </div>
  );
};

export default WelcomeMessage;
