import { string } from "yup/lib/locale";

export interface TokensInterface {
  session: string;
  refresh: string;
}

export interface RefreshTokensInterface {
  result: string;
  token: TokensInterface;
  message: string;
}

export interface RefreshRequestInterface {
  refresh: string;
}

export interface CheckTokenResponse {
  ok: string;
  isAuthenticated: boolean;
  roles: Array<string>;
  permissions: Array<string>;
}
