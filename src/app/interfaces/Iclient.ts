export interface Iclient {
  accountNumber: string;
  accountType: string;
  balance: number;
  _id: string;
  owner: User;
}

export interface User {
  name: string;
  email: string;
  password: string;
  _id: string;
}
