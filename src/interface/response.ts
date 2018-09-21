import { IProfile } from "./profile";

export interface IResponse {
    result: string;
    message: string;
    user_data: IProfile;
}