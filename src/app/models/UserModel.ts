import { AddressModel } from './AddressModel';
import { CompanyModel } from './CompanyModel';

export class UserModel{
    constructor (
        public id: number,
        public name: string,
        public username: string,
        public email: string,
        public address: AddressModel,
        public phone: string,
        public company: CompanyModel
    ) {}
}
