import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { db } from 'src/drizzle/db';
import { user } from 'src/drizzle/schema';
import { NewUserType } from 'src/drizzle/type';

@Injectable()
export class UsersService {
  async create(createUserDto: NewUserType): Promise<NewUserType[]> {
    try {
      const data = db.insert(user).values(createUserDto).returning();
      return data;
    } catch (error) {
      return error;
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
