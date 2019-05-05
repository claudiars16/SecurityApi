

import { Controller, Get, Response, HttpStatus, Body, Param, Post, Res, Patch, Delete } from '@nestjs/common';
import { PreguntaService } from './pregunta.service';
import { createPreguntaDto } from './dto/createPregunta.dto';



@Controller('preguntas')
export class PreguntaController {
  constructor(private readonly PreguntaService:PreguntaService ) {

  }

  @Get()
  public async getTodos(@Response() res) {
    const todos = await this.PreguntaService.findAll();
    return res.status(HttpStatus.OK).json(todos);
  }
  @Get('find')
  public async findTodo(@Response() res, @Body() body) {
    const querycondition = body;
    const todos = await this.PreguntaService.findOne(querycondition);
    return res.status(HttpStatus.OK).json(todos);
  }
  @Get('/:id')
  public async getTodo(@Response() res, @Param() param) {
    const todos = await this.PreguntaService.findById(param.id);
    return res.status(HttpStatus.OK).json(todos);
  }
  @Post()

  public async createTodo(@Response() res, @Body() createPreguntaDto: createPreguntaDto) {
    const todo = await this.PreguntaService.create(createPreguntaDto);
    
    return res.status(HttpStatus.OK).json(todo);
  }
  @Patch(':/id')
  public async updateTodo(@Param() param, @Response() res, @Body() body) {
    const todo = await this.PreguntaService.update(param.id, body);
    return res.status(HttpStatus.OK).json(todo);
  }

  @Delete(':/id')
  public async deleteTodo(@Param() param, @Res() res) {
    const todo = await this.PreguntaService.delete(param.id);
    return res.status(HttpStatus.OK).json(todo);
  }

  
  

}
