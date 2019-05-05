import {IPregunta} from './pregunta.interface';

export interface IPreguntaService {
  findall() : Promise < IPregunta[] >;
  findById(ID : number) : Promise < IPregunta | null >;
  findOne(options : object) : Promise < IPregunta | null >;
  create(todos : IPregunta) : Promise < IPregunta >;
  update(ID : number, newvalue : IPregunta) : Promise < IPregunta | null >;
  delete(ID : number) : Promise < String >;

}