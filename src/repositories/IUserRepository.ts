import { IUser, IUserFields } from '../types/User';

interface IUserRepository {
  store(user: IUser): Promise<IUserFields>;
  findAll(): Promise<IUser[]>;
  findOne(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  delete(id: string): Promise<boolean>;
}

export { IUserRepository };
