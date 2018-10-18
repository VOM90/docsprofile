import React from "react";
import Banner from "../../Banner";

const СreateDocument = ({ handleInputChange, handleSubmit, errors }) => (
  <div>
    <Banner
      backgroundImage={`url(${
        process.env.PUBLIC_URL
      }/assets/img/bg-laptop.jpg)`}
      title="Add your document"
      subTitle="in PDF format"
    />

    <main className="main-content">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <ul className="list-group">
                {errors.map(error => (
                  <li
                    key={error.message}
                    className="list-group-item text-danger"
                  >
                    {error.message}
                  </li>
                ))}
              </ul>
              <form className="p-30 bg-gray rounded" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-12 col-md-6 adding-file-title">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="title"
                      placeholder="Title"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-12 col-md-6 adding-file-title">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="file"
                      placeholder="File name"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button className="btn btn-lg btn-primary" type="submit">
                    Add Document
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default СreateDocument;
