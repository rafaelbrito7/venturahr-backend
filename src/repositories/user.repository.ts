import User from '../database/entities/User';
import { IUser, IUserFields } from '../types/User';
import { IUserRepository } from './IUserRepository';

class UserRepository implements IUserRepository {
  async store(user: IUserFields): Promise<IUser> {
    const newUser = await User.create(user);

    return newUser;
  }

  async delete(id: string): Promise<boolean> {
    await User.findByIdAndDelete(id);

    return true;
  }

  async findAll(): Promise<IUser[]> {
    const users = await User.find<IUser>();

    return users;
  }

  async findOne(id: string): Promise<IUser | null> {
    const user = await User.findOne({ where: { id } });

    return user;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ where: { email } });

    return user;
  }
}

export { UserRepository };
