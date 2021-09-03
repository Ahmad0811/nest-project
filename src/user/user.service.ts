import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

  async getUser(id: string): Promise<User> {
    try {
      if (!id) {
        return null;
      }
      const user = await this.UserModel.findById(id);

      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      return null;
    }
  }

  async getAllUsers(): Promise<User[]> {
    return await this.UserModel.find();
  }
}
