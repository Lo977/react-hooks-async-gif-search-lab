import React, { useState } from "react";

function GifSearch({ onSearch }) {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(input);
    setInput("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label form="input">
        {" "}
        Enter a Search Term
        <br />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <input type="submit" value="Find Gifs" />
    </form>
  );
}

export default GifSearch;
