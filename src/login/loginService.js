import axios from "axios";
import { signInUrl } from "../routes/routeConfig";

export const login = async (payload) => {
  console.log(payload);
  const res = await axios.post(signInUrl, payload);
  console.log(res);
};
