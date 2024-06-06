import React from "react";

import "./PhotoGallery.css";

export default function PhotoGallery(props) {
  if (props.photos) {
    return (
      <section className="PhotoGallery">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4">
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img src={photo.src.tiny} key={index} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
