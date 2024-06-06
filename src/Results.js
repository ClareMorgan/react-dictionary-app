import React from "react";

import Phonetics from "./Phonetics";
import Meanings from "./Meanings";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetics, index) {
            return (
              <div className="Phonetics" key={index}>
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meanings meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
