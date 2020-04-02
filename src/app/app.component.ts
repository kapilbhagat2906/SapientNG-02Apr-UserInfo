import { Component } from '@angular/core';
import { UserModel } from './models/UserModel';
import userMockData from './mock/userData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UserInfoApp';
  userInfoList: Array<UserModel> = userMockData;
}
