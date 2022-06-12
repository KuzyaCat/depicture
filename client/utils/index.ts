export const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length
  )}`;
};

export const slicePictureId = (url: string) => {
  const splitted = url.split('/');
  return splitted[splitted.length - 1];
};
