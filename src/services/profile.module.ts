import { PreguntaService } from './preguntas/pregunta.service';
import { preguntaSchema } from './preguntas/schema/pregunta.schema';
import {UsersService} from './users/users.service';
import {UsersController} from './users/users.controller';
import {UserSchema} from './users/schema/user.schema';
import {Module} from '@nestjs/common'

import {MongooseModule} from '@nestjs/mongoose';
import {PreguntaModule} from './preguntas/pregunta.module';
import {PreguntaController} from './preguntas/pregunta.controller';
@Module({
  imports: [MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema
      },
      {
        name: 'Pregunta',
        schema: preguntaSchema
      }
    ])],
  controllers: [
    UsersController, PreguntaController
  ],
  providers: [UsersService, PreguntaService]
})
export class ProfileModule {}