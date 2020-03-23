import {USER_NAME} from "../constants";

export function changeUserName(userName: string) {
    return{
        type: USER_NAME,
        payload: userName
    }
}
