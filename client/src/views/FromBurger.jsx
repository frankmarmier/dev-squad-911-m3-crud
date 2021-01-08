import React from "react";

// import axios from "axios";
import ApiHandler from "../api/apiHandler";

const api = new ApiHandler();

class FromBurger extends React.Component {
  state = {
    name: "",
    price: 0,
    image: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    api
      .post("/api/burgers", {
        name: this.state.name,
        price: this.state.price,
        image: this.state.image,
      })
      .then((apiResponse) => {
        console.log(apiResponse);
      })
      .catch((err) => {
        console.log(err);
      });

    // axios
    //   .post("http://localhost:4000/api/burgers", {
    //     name: this.state.name,
    //     price: this.state.price,
    //     image: this.state.image,
    //   })
    //   .then((apiResponse) => {
    //     console.log(apiResponse);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input onChange={this.handleChange} type="text" name="name" />
        </div>
        <div>
          <label htmlFor="">Price</label>
          <input onChange={this.handleChange} type="number" name="price" />
        </div>
        <div>
          <label htmlFor="">Image</label>
          <input onChange={this.handleChange} type="text" name="name" />
        </div>
        <button>Submit !</button>
      </form>
    );
  }
}

export default FromBurger;
