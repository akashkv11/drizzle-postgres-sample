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
      const data = await db.insert(user).values(createUserDto).returning();
      return data;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const data = await db.query.user.findMany();
      return data;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const data = await db.query.user.findFirst({
        where: (user, { eq }) => eq(user.id, id),
      });
      return data;
    } catch (error) {
      return error;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
