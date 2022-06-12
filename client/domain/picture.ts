export interface IPicture {
  name: string;
  artist: string;
  description: string;
  image: string;
  attributes: Array<IPictureAttribute>;
};

export interface IPictureAttribute {
  id: number;
  requiresAddress?: boolean;
  requiresVerification: boolean;
  name: string;
  value?: string;
  verifications: Array<IPictureVerification>;
  isDescription?: boolean;
}

export interface IPictureVerification {
  id: number;
  verified: boolean;
  verifiedBy: string;
}
