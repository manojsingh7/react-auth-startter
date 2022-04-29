import { SOCIAL_TYPE } from "./RequestTypes";
export type AUTH_STATE = {
  user?: any;
  loggedIn: boolean;
  token: string;
  accountType: SOCIAL_TYPE | "EMAIL";
};
