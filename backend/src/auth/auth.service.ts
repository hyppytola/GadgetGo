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

  async login(email:string,password:string) {
    return    (await this.db.collection('customer').aggregate([
      {
        $match:{
          email:email,
          password:password//TODO : hash password
        }
      },
      {
        $project:{
          _id:1,
          email:1,
          password:1
        }
      }
    ]).toArray())[0]
  }
  async validateUser(){

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
