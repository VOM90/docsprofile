import React from "react";
import CreateDocumentForm from "./CreateDocumentForm";

class CreateDocument extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      file: "",
      errors: []
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    try {
      await this.props.createDocument(this.state, this.props.token);
      this.props.history.push("/profile");
    } catch (errors) {
      this.setState({ errors });
    }
  };

  render() {
    return (
      <CreateDocumentForm
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        errors={this.state.errors}
      />
    );
  }
}

export default CreateDocument;
