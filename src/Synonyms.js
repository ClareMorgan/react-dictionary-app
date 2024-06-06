import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <section>
        <div className="Synonyms">
          <h3>synonyms</h3>
          <ul>
            {props.synonyms.map(function (synonym, index) {
              if (index < 5) {
                return <li key={index}>{synonym}</li>;
              }
            })}
          </ul>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
