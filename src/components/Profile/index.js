import React from "react";
import Documents from "./Documents";


class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      documents: {},
    }
  }

  async componentWillMount() {
    const documents = await this.props.getDocuments();

    this.setState({ documents });
  }

  render() {
    return <Documents 
      documents={this.state.documents.data}
    />;
  }
}

export default Profile;
