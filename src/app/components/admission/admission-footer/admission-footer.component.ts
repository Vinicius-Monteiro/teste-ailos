import { Component, Input, OnInit } from '@angular/core';
import { CpfValidationService } from 'src/app/services/cpf-validation.service';

@Component({
    selector: 'app-admission-footer',
    templateUrl: './admission-footer.component.html',
    styleUrls: ['./admission-footer.component.scss'],
})
export class AdmissionFooterComponent implements OnInit {
    constructor(public cpfService: CpfValidationService) {}

    ngOnInit(): void {}

    handleClick() {}
}
