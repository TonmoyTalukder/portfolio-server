

// Type for the login functionality
export type TLoginUser = {
  email: string;
  password: string;
};

// Type for registering a new user with additional fields
export type TRegisterUser = {
  name: string;
  displayPicture?: string;
  email: string;
  phone?: string;      
  password: string;
};
