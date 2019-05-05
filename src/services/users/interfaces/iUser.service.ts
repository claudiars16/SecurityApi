import {IUser} from './user.interface';
export interface IUserService {
  findall() : Promise < IUser[] >;
  findById(ID : number) : Promise < IUser | null >;
  findOne(options : object) : Promise < IUser | null >;
  create(todos : IUser) : Promise < IUser >;
  update(ID : number, newvalue : IUser) : Promise < IUser | null >;
  delete(ID : number) : Promise < String >;

}