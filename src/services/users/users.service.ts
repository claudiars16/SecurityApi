import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createUserDto } from './dto/createUser.dto';
import { IUser, IUserService } from './interfaces/index';
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>){

  }
  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec();
}
async findOne(options: object): Promise<IUser> {
    return await this.userModel.findOne(options).exec();
}
async findById(ID: number): Promise<IUser> {
    return await this.userModel.findById(ID).exec();
}
async create(createUserDto: createUserDto): Promise<IUser> {
    const createTodo = new this.userModel(createUserDto);
    return await createTodo.save();
}
async update(ID: number, newValue: IUser): Promise<IUser> {
    const todo = await this.userModel.findById(ID).exec();
    if (!todo._id) {
        console.log('No encontrado');
    }
    await this.userModel.findByIdAndUpdate(ID, newValue).exec();
    return await this.userModel.findById(ID).exec();
}
async delete(ID:number):Promise<String>{
    try {
        await this.userModel.findByIdAndRemove(ID).exec();
        return 'Se  ha eliminado con exito'
    } catch (error) {
        console.log(error);
        return 'No se puede borrar este registro'
    }
}

}
