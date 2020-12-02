import { IUser } from 'app/core/user/user.model';

export interface IApplicationUser {
  id?: number;
  additionalField?: number;
  internalUser?: IUser;
}

export class ApplicationUser implements IApplicationUser {
  constructor(public id?: number, public additionalField?: number, public internalUser?: IUser) {}
}
