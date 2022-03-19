export interface IUser {
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
  cpf?: string;
  cnpj?: string;
  socialReason?: string;
  type: string;
  jobVacancies?: Array<string>[];
  token?: string;
}
