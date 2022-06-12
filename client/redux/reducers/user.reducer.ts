import { UserAction } from '../actions'
import { UserState } from '../models'


const initialState: UserState = {
  walletAddress: null,
}

const UserReducer = (state: UserState = initialState, action: UserAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'ON_USER_CONNECT':
      return {
        ...state,
        walletAddress: payload
      }

    default:
      return state;

  }
}

export { UserReducer };
