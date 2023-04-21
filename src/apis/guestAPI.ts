import { IGuest, Guest } from "~/common/interfaces/guest.interface";
import api from "./api";
import { IPage } from "~/common/interfaces/common.interface";

export async function queryGuestList(params: IPage = {}): Promise<Guest[]> {
  return api.get(`guest`, {params: params})
    .then(res => res.data);
}

export async function createGuest(body: IGuest): Promise<Guest> {
  return api.post('guest', body)
    .then(res => res.data);
}