import React from "react";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("check data input", this.state);
  };

  render() {
    console.log("call render: ", this.state);
    return (
      <>
        <form>
          <label>First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label>Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />

          <input
            type="Submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </>
    );
  }
}
export default MyComponent;
