export interface IAuctionDetails {
  endsIn: string;
  bids: Array<IBid>;
};

export interface IBid {
  id: number;
  userName: string;
  value: string;
  address?: string;
};
