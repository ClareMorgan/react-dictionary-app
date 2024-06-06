import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import PhotoGallery from "./PhotoGallery";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let photosApiKey =
      "6ogpIjdyHJq9D1XRKaIKQBTdSZ2K4dkaUYN3K38LV1nd9UpnXNgeNCrG";
    let photosApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${photosApiKey}` };
    axios.get(photosApiUrl, { headers: headers }).then(handlePhotosResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word would you like to look up? </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">Suggestions: magic, mystery, music...</div>
        </section>
        <Results results={results} />
        <PhotoGallery photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
