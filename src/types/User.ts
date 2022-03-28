import { IFieldDefault } from './FieldDefault';

export enum userType {
  Admin = 'ADMIN',
  Contractor = 'CONTRACTOR',
  Candidate = 'CANDIDATE',
}

interface IUserFields {
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
  cpf?: string;
  cnpj?: string;
  socialReason?: string;
  type: userType;
  createdId: string;
}

type IUser = IFieldDefault & IUserFields;

export type { IUserFields, IUser };
