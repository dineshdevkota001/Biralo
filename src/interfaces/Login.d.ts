import { TokensInterface } from "./Token";

export interface Login {
  username: string;
  password: string;
}
export interface LoginResponse {
  result: string;
  token: TokensInterface;
}
