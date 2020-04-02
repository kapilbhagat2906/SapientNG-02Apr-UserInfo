import {Component, Input} from '@angular/core';
import { AddressModel } from 'src/app/models/AddressModel';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent {
    @Input()
    addressInfo: AddressModel;
}
