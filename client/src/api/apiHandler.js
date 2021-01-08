import axios from "axios";

class ApiHandler {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
    });
  }

  get(endPoint) {
    return this.service.get(endPoint);
  }

  post(endPoint, data) {
    return this.service.post(endPoint, data);
  }

  patch(endPoint, data) {
    return this.service.patch(endPoint, data);
  }

  //  http://localhost:4000/api/burgers/55fejafoiajeoifafoaeee
  delete(endPoint) {
    return this.service.delete(endPoint); //
  }
}

export default ApiHandler;
