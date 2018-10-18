import React from "react";

const Document = document => {
  return (
    <div>
      <div className="card-block text-center">
        <p>
          <span className="doc__title">
            <span className="doc__title-desc">Title:</span>{" "}
            {document.document.title}{" "}
          </span>
          <span className="doc__file">
            <span className="doc__file-desc">File:</span>{" "}
            {document.document.file}{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Document;
