import {Component, Input} from '@angular/core';
import { UserModel } from '../models/UserModel';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {
    @Input()
    userInfo: UserModel;
}
