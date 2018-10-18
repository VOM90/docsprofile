import { validateAll } from "indicative";
import Api from "../sevices/global";

export default class AuthService {
  async registerUser(data) {
    const rules = {
      email: "required|email",
      password: "required|string|min:8|confirmed"
    };

    const messages = {
      required: "This {{field}} is required.",
      "email.email": "Email is not valid.",
      "password.confirmed": "The password confirmation does not match."
    };

    try {
      await validateAll(data, rules, messages);

      const response = await Api.post(`signup`, {
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation
      });

      return response.data;
    } catch (errors) {
      const formattedErrors = {};

      if (errors.response && errors.response.status === 422) {
        formattedErrors["email"] = errors.response.data["email"][0];
        return Promise.reject(formattedErrors);
      }

      errors.forEach(error => (formattedErrors[error.field] = error.message));

      return Promise.reject(formattedErrors);
    }
  }

  async loginUser(data) {
    const rules = {
      email: "required|email",
      password: "required|string"
    };

    const messages = {
      required: "This {{field}} is required.",
      "email.email": "Email is not valid."
    };

    try {
      await validateAll(data, rules, messages);

      const response = await Api.post(`signin`, {
        email: data.email,
        password: data.password
      });

      if (response.status === 200) {
        window.localStorage.setItem("token", response.data.token);
        // Alter defaults after instance has been created
        Api.defaults.headers.common["Authorization"] = `Bearer ${
          response.data.token
        }`;
      }

      return response.data;
    } catch (errors) {
      const formattedErrors = {};

      if (errors.response && errors.response.status === 401) {
        formattedErrors["email"] = "Invalid credentials.";
        return Promise.reject(formattedErrors);
      }

      errors.forEach(error => (formattedErrors[error.field] = error.message));

      return Promise.reject(formattedErrors);
    }
  }
}
