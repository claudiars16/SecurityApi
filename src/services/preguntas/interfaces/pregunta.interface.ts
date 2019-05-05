import {Document} from 'mongoose';
export interface IPregunta extends Document {
  UserId : string;
  firstName : string;
  lastName : string;
  email : string;
  password : string;
}