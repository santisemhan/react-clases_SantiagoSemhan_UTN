import React from "react";

const Character = ({ name, birthday, img, nickname }) => {
  return (
    <>
      <div className="col-4">
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {nickname} - {birthday}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
