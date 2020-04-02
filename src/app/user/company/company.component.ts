import {Component, Input} from '@angular/core';
import { CompanyModel } from 'src/app/models/CompanyModel';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
    @Input('companyInfo')
    companyDetails: CompanyModel;
}
