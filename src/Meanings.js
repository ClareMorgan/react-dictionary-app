import React from "react";

import Synonyms from "./Synonyms";

import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.definitions.map(function (definition, index) {
        if (index < 2) {
          return (
            <section>
              <div key={index}>
                <h3>{props.meanings.partOfSpeech}</h3>
                <div className="definition">{definition.definition}</div>
                <div className="example">{definition.example}</div>
              </div>
            </section>
          );
        } else {
          return null;
        }
      })}
      <Synonyms synonyms={props.meanings.synonyms} />
    </div>
  );
}
