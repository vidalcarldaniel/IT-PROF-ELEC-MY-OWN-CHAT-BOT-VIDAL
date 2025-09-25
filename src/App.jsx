import React from 'react'
import { useState } from 'react';
import { askAi } from './Lib/ai';

export default function App() {
  const [promt, setPromt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = async (e) => {
    setPromt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await askAi(promt);
    setResponse(response);
    setPromt('');
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="flex flex-col gap-6 items-center bg-neutral-800/80 p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-extrabold tracking-tight text-orange-400 drop-shadow mb-2">CharlieGPT</h1>
        <div className="w-full flex flex-col gap-2">
          <div className={`rounded-2xl px-5 py-4 min-h-[64px] bg-neutral-700/80 text-lg text-white shadow-inner transition-all border border-neutral-600`}>
            {response === '' ? <span className="text-neutral-400 italic">Ask lolo</span> : response}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <input
            className="flex-1 rounded-full px-4 py-2 bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder:text-neutral-500 transition"
            type="text"
            value={promt}
            onChange={handleInputChange}
            placeholder="Type your question..."
            disabled={isLoading}
            autoFocus
          />
          <button
            type="submit"
            className="rounded-full px-5 py-2 bg-orange-600 hover:bg-orange-500 transition text-white font-semibold shadow disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={isLoading || !promt.trim()}
          >
            {isLoading ? (
              <span className="animate-pulse">...</span>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
      <footer className="mt-8 text-neutral-500 text-xs">Made with ❤️ for Charlie</footer>
    </div>
  )
}
