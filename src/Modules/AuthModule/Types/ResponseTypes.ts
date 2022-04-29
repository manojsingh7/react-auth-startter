export type USER_TYPE = "NORMAL" | "PROFESSIONAL";

export type CREDIT_CARD = {
  creditCardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  cvv: string;
  primary: boolean;
  _id: string;
};

export type BANK_ACCOUNT = {
  accountHolder: string;
  IBAN: string;
  BIC: string;
  billingAdress: string;
  _id: string;
};

export type USER = {
  _id: string;
  email: string;
  createdAt: string;
  isEmailVerified: boolean;
  isProfileCompleted: boolean;
  updatedAt: string;
  userType: USER_TYPE;
  city: string;
  country: string;
  countryCode: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profilePic: string;
  salutation: string;
  userName: string;
  zipcode: string;
  creditCards: Array<CREDIT_CARD>;
  bankAccount: Array<BANK_ACCOUNT>;
  address: string;
};

export type LOGIN_RESPONSE = {
  message: string;
  status: number;
  data: {
    user: USER;
    token: string;
  };
};
