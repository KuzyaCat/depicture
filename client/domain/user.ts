export interface IUser {
  fullname: string;
  image: string;
  attributes: Array<IUserAttribute>;
};

export interface IUserAttribute {
  id: number;
  active: boolean;
  requiresVerification: boolean;
  name: string;
  value: string;
  verifications: Array<IUserVerification>;
  isDescription?: boolean;
}

export interface IUserVerification {
  id: number;
  verified: boolean;
  verifiedBy: string;
}
