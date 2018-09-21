import { IOrder } from "./order";

export interface ITransaction {
    user_id: number;
    orders: IOrder[];
}