import { Inject, Injectable } from '@nestjs/common';
import { MongodbFindOneOptions } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { RegisterDto } from './dto/create-registr.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

import * as mongodb from 'mongodb'
@Injectable()
export class AuthService {

  constructor(
    @Inject('DATABASE_CONNECTION') private db: mongodb.Db
  ){}
  register(dto: RegisterDto) {
    console.log(dto);
    this.db.collection('customer').insert(dto)
    
const checker = this.db.collection('customer').aggregate([
  {
$match:{
  email:dto.email
}
  }
]).toArray()
console.log(checker);

    return checker;
  }

  login(dto: CreateAuthDto) {
    return dto;
  }

  async findUser(email: string) {
    console.log(`email`, email);
    return (await this.db.collection('customer').aggregate([
      {
        $match: {
          email: email
        }
      }
    ]).toArray())[0];
  }

 
}
