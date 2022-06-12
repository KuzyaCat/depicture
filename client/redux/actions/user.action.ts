import { Dispatch } from 'react';

export interface UserConnectWalletAction {
  readonly type: 'ON_USER_CONNECT',
  payload: string | null,
}

export type UserAction = UserConnectWalletAction;

export const onConnectWallet = (address: string | null) => {

  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: 'ON_USER_CONNECT',
      payload: address,
    })
  }
}
