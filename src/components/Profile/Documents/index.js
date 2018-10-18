import React from "react";
import Banner from "../../Banner";
import Document from "../../Document";

const Documents = ({ documents }) => {
  return (
    <div>
      <Banner
        backgroundImage="url(assets/img/bg-gift.jpg)"
        title="Hello in Profile"
        subTitle="There are your docs"
      />
      <main className="main-content bg-gray">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3 documents__list">
            <h3>Documents list:</h3>
            {documents &&
              documents.map(document => (
                <div key={document.id}>
                  <Document document={document} />
                  <hr />
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Documents;
