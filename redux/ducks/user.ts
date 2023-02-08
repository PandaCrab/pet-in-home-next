import { UserInfo } from "../../../pet-in-home-next/types/types";

const USER_TOKEN = 'user/USER_TOKEN';
const USER_INFO = 'user/USER_INFO';
const USER_LOGOUT = 'user/USER_LOGOUT';

interface State {
    token: string;
    info: UserInfo | null;
};

const initialState: State = {
    token: '',
    info: null,
};

export default function userReducer(state = initialState, action: { type: string, payload?: any }) {
    switch (action.type) {
        case USER_TOKEN:
            return { ...state, token: action.payload };
        case USER_INFO:
            return { ...state, token: action.payload };
        case USER_LOGOUT:
            return { token: '', info: null };
        default: return state;
    }
};

export const getToken = (token: string) => ({
    type: USER_TOKEN,
    payload: token
});

export const getInfo = (info: UserInfo) => ({
    type: USER_INFO,
    payload: info
});

export const logout = () => ({ type: USER_LOGOUT });
