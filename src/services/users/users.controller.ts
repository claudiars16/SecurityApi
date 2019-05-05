import { createUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

import { Controller, Get, Response, HttpStatus, Body, Param, Post, Res, Patch, Delete } from '@nestjs/common';

const rptalogin = function (email,password,firstName,lastName,cod,mensaje ) {
  return {
      email:email,
      password:password,
      firstName:firstName,
      lastName:lastName,
      cod:cod,
      mensaje:mensaje 
  }

};
@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {

  }

  @Get()
  public async getTodos(@Response() res) {
    const todos = await this.UsersService.findAll();
    return res.status(HttpStatus.OK).json(todos);
  }
  @Get('find')
  public async findTodo(@Response() res, @Body() body) {
    const querycondition = body;
    const todos = await this.UsersService.findOne(querycondition);
    return res.status(HttpStatus.OK).json(todos);
  }
  @Get('/:id')
  public async getTodo(@Response() res, @Param() param) {
    const todos = await this.UsersService.findById(param.id);
    return res.status(HttpStatus.OK).json(todos);
  }
  @Post()

  public async createTodo(@Response() res, @Body() createUserDto: createUserDto) {
    const todo = await this.UsersService.create(createUserDto);
    const rpta=rptalogin(
      todo.email,todo.password,todo.firstName,todo.lastName,1,
      'Registro Exitoso"')
    return res.status(HttpStatus.OK).json(rpta);
  }
  @Patch(':/id')
  public async updateTodo(@Param() param, @Response() res, @Body() body) {
    const todo = await this.UsersService.update(param.id, body);
    return res.status(HttpStatus.OK).json(todo);
  }

  @Delete(':/id')
  public async deleteTodo(@Param() param, @Res() res) {
    const todo = await this.UsersService.delete(param.id);
    return res.status(HttpStatus.OK).json(todo);
  }

  
  //login y registro
  //login
  @Post('/login')
  
  public async login(@Res() res, @Body() createUserDto: createUserDto) {
      console.log(createUserDto)
    var rpta={};
      const email = createUserDto.email.trim()
    
    const password = createUserDto.password.trim()
    const usuario = await this.UsersService.findOne({ email });
    if (usuario) {
      if (usuario.password == password) {
        rpta=rptalogin(
          usuario.email,usuario.password,usuario.firstName,usuario.lastName,1,
          'Login Exitoso"')
       
        return res.status(HttpStatus.OK).jsonp(rpta);
      } else {
        rpta=rptalogin(
          '','','','',0,
          'El Password es incorrecto!"')
        res.status(200).jsonp(rpta);
      }
    }
    else {
      rpta=rptalogin(
        '','','','',0,
        'No existe el usuario!"')
      res.status(200).jsonp(rpta);
    }

  }


}
