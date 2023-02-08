import type { UserInfo } from "./types";

export type ReduxStore = {
    user: {
        token: string;
        info: UserInfo | null;
    }
};
