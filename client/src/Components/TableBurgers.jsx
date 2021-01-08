import React from "react";
import ApiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
const api = new ApiHandler();

class TableBurgers extends React.Component {
  state = {
    burgers: [],
  };

  // getAllBurgers() {
  //   api
  //     .get("/api/burgers")
  //     .then((apiResponse) => {
  //       console.log(apiResponse);
  //       this.setState({
  //         burgers: apiResponse.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  componentDidMount() {
    // this.getAllBurgers();
    api
      .get("/api/burgers")
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({
          burgers: apiResponse.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleDelete = (id) => {
    api
      .delete(`/api/burgers/${id}`)
      .then((apiResponse) => {
        // this.getAllBurgers();
        this.setState({
          burgers: this.state.burgers.filter((burger) => burger._id !== id),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.burgers.map((burger) => {
            return (
              <tr key={burger._id}>
                <td>{burger.name}</td>
                <td>{burger.price}</td>
                <td>
                  <img
                    style={{ width: 48, height: 48 }}
                    src={burger.image}
                    alt={burger.name}
                  />
                </td>
                <td>
                  <Link to={`/admin/burger-form/${burger._id}/edit`}>
                    <button>Edit</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => this.handleDelete(burger._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default TableBurgers;
