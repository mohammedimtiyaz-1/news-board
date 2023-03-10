"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`search?term=${input}`);
  };

  return (
    <form
      className="max-w-2xl mx-auto flex justify-between items-center px-5 my-4 rounded-2xl border border-gray-800 dark:border-gray-100"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search Topic..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none  bg-transparent dark:text-orange-400"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
