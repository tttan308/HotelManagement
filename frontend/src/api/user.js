import axios from "../config/axios";

export const apiRegister = async (body) => {
  const data = await axios({
    url: "auth/register",
    method: "post",
    data: body,
  });
  return data;
};

export const apiLogin = async (body) => {
  const data = await axios({
    url: "auth/authenticate",
    method: "post",
    data: body,
  });
  return data;
};
