import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [giffys, setGiffys] = useState([]);
  const [search, setSearch] = useState("");
  //   console.log(search);
  let key = "JbdW352yT01CfRdOwU9EAAJdjoOfp2NK";
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&rating=g`
    )
      .then((r) => r.json())
      .then((data) => {
        setGiffys(data.data.slice(0, 3));
      });
  }, [search]);
  //   console.log(giffys);
  return (
    <div>
      <GifSearch onSearch={setSearch} />
      <GifList giffys={giffys} />
    </div>
  );
}

export default GifListContainer;
