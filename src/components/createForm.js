//Dependencies
import React, { PureComponent } from "react";
import { withRouter } from "react-router";

//MaterialUI
import Paper from "material-ui/Paper";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class CreateForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Paper
          style={{
            position: "relative",
            top: 80,
            botom: 10,
            margin: "auto",
            width: "50%",
            overflow: "scroll",
            height: "70%"
          }}
        >
          <Subheader style={{ fontSize: 40 }}>Product Creator</Subheader>
          <Divider style={{ padding: 1, marginBottom: 1 }} />
          <form name="Create product" onSubmit={this.handleSubmit}>
            <TextField
              floatingLabelFocusStyle={{ color: "blue" }}
              underlineFocusStyle={{ borderColor: "grey" }}
              name="name"
              floatingLabelText="Product name"
              value={this.state.name || ""}
              onChange={this.handleChange}
              required
            />
            <br />
            <TextField
              floatingLabelFocusStyle={{ color: "blue" }}
              underlineFocusStyle={{ borderColor: "grey" }}
              name="price"
              floatingLabelText="Product price"
              value={this.state.price || ""}
              onChange={this.handleChange}
              required
            />
            <br />
            <TextField
              floatingLabelFocusStyle={{ color: "blue" }}
              underlineFocusStyle={{ borderColor: "grey" }}
              name="image"
              floatingLabelText="Image of product"
              value={this.state.image || ""}
              onChange={this.handleChange}
              required
            />
            <br />
            <div style={{ display: "inline-block" }}>
              <RaisedButton type="submit" label="Save" backgroundColor="grey" />
            </div>
            <br />
            <br />
            <br />
          </form>
        </Paper>
      </div>
    );
  }
}

export default withRouter(CreateForm);
