import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="max-w-xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
}

export default App;
