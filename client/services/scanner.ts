export class Scanner implements IScanner {
  private navigation;

  constructor(navigation: any) {
    this.navigation = navigation; // TODO: add type
  }

  public scanAndRedirect(
    callback: () => any,
    url: string,
    params?: {[key: string]: string}
  ) {
    callback();
    this.navigation.navigate(url, params)
  }
}

export interface IScanner {
  scanAndRedirect: (
    callback: () => any,
    url: string,
    params?: {[key: string]: string}
  ) => void;
}
