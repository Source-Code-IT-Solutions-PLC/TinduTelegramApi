import { IUser } from "./user";

export interface ILoginInput {
  email: string;
  password: string;
}

export interface IToken {
  access_token: string;
  refresh_token: string;
}

export interface ILoginResponse {
  data: IUser;
  token: IToken;
}
