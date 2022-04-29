export type ACCOUNT_PROFILE_DETAIL_RESPONSE = {
  status: number;
  message: string;
  data: {
    _id: string;
    email: string;
    __v: number;
    createdAt: string;
    isProfileCompleted: string;
    updatedAt: string;
    userType: string;
    city: string;
    // address: string;
    country: string;
    countryCode: number;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    profilePic: File;
    salutation: string;
    userName: string;
    zipcode: string;
  };
};
