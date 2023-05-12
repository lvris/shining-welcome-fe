import { IGuest, Guest } from "~/common/interfaces/guest.interface";
import { IPage } from "~/common/interfaces/common.interface";
import api from "./api";
import { IGuestUpdate } from "~/common/interfaces/guest.interface";

export async function queryGuestList(params: IPage = {}): Promise<Guest[]> {
  return api.get(`guest`, {params: params})
    .then(res => res.data);
}

export async function createGuest(body: IGuest)
: Promise<{token?:string, guest:Guest}> {
  return api.post('guest', body)
    .then(res => res.data);
}

export async function queryGuestByID(id: number): Promise<Guest> {
  return api.get(`guest/${id}`)
    .then(res => res.data);
}

export async function updateGuestByID(id:number, body: IGuestUpdate)
: Promise<Guest> {
  return api.put(`guest/${id}`, body)
    .then(res => res.data);
}