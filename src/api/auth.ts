import { postRequest } from "api";
import { ILoginInput, ILoginResponse } from "models/auth";


export const loginApi = (data: ILoginInput) => {
  return postRequest<ILoginResponse>("auth/login", data);
};
