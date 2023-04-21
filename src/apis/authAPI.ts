import { IAuth, IToken } from "~/common/interfaces/auth.interface";
import api from "./api";

export async function authAdmin(body: IAuth): Promise<IToken> {
  return api.post('auth', body)
    .then(res => res.data);
}

export async function parceToken(): Promise<{id?: number, admin?: boolean}> { 
  return api.get('auth')
    .then(res => res.data);
}