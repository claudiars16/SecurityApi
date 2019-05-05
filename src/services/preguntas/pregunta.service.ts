import {IPregunta} from './interfaces/pregunta.interface';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {createPreguntaDto} from './dto/createPregunta.dto';

@Injectable()
export class PreguntaService {
  constructor(@InjectModel('Pregunta')private readonly userModel : Model < IPregunta >) {}
  async findAll() : Promise < IPregunta[] > {
    return await this
      .userModel
      .find()
      .exec();
  }
  async findOne(options : object) : Promise < IPregunta > {
    return await this
      .userModel
      .findOne(options)
      .exec();
  }
  async findById(ID : number) : Promise < IPregunta > {
    return await this
      .userModel
      .findById(ID)
      .exec();
  }
  async create(createPreguntaDto : createPreguntaDto) : Promise < IPregunta > {
    const createTodo = new this.userModel(createPreguntaDto);
    return await createTodo.save();
  }
  async update(ID : number, newValue : IPregunta) : Promise < IPregunta > {
    const todo = await this
      .userModel
      .findById(ID)
      .exec();
    if (!todo._id) {
      console.log('No encontrado');
    }
    await this
      .userModel
      .findByIdAndUpdate(ID, newValue)
      .exec();
    return await this
      .userModel
      .findById(ID)
      .exec();
  }
  async delete(ID : number) : Promise < String > {
    try {
      await this
        .userModel
        .findByIdAndRemove(ID)
        .exec();
      return 'Se  ha eliminado con exito'
    } catch (error) {
      console.log(error);
      return 'No se puede borrar este registro'
    }
  }

}
