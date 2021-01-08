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

  componentDidMount() {
    const burgerId = this.props.match.params.id;

    api
      .get("/api/burgers/" + burgerId)
      .then((apiResponse) => {
        // console.log(apiResponse);
        const burger = apiResponse.data;
        this.setState({
          name: burger.name,
          price: burger.price,
          image: burger.image,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const burgerId = this.props.match.params.id;

    api
      .patch("/api/burgers/" + burgerId, {
        name: this.state.name,
        price: this.state.price,
        image: this.state.image,
      })
      .then((apiResponse) => {
        this.props.history.push("/admin/dashboard");
        // console.log(apiResponse);
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
        <h2>Edit Burger !</h2>
        <div>
          <label htmlFor="">Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="">Price</label>
          <input
            onChange={this.handleChange}
            value={this.state.price}
            type="number"
            name="price"
          />
        </div>
        <div>
          <label htmlFor="">Image</label>
          <input
            onChange={this.handleChange}
            value={this.state.image}
            type="text"
            name="name"
          />
        </div>
        <button>Submit !</button>
      </form>
    );
  }
}

export default FromBurger;
