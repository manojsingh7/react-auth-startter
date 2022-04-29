import { BehaviorSubject } from "rxjs";
import PersistStorage from "src/Utils/PersistStorage";
import { AUTH_STATE } from "../Types/CommonTypes";

class AuthService {
  queryKeys = {};
  initialAuthState: AUTH_STATE = {
    loggedIn: false,
    user: undefined,
    token: "",
    accountType: "EMAIL",
  };

  authState$ = new BehaviorSubject<AUTH_STATE>(this.initialAuthState);

  constructor() {
    new PersistStorage("authState", this.authState$);
  }

  resetAuthValue = () => {
    this.authState$.next(this.initialAuthState);
  };
}

export default new AuthService();
