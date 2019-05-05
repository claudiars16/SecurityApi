import {Document} from 'mongoose';
export interface IUser extends Document {
  UserId : string;
  firstName : string;
  lastName : string;
  email : string;
  password : string;
}