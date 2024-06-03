import React from "react";

function GifList({ giffys }) {
  return (
    <ul>
      {giffys.map((gif) => {
        return (
          <li key={gif.id}>
            <img src={gif.images.original.url} alt={gif.title} />
          </li>
        );
      })}
    </ul>
  );
}

export default GifList;
