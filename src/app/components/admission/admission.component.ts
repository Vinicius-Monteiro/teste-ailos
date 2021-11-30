import { Component, OnInit } from '@angular/core';
import { CpfValidationService } from 'src/app/services/cpf-validation.service';

interface User {
    name: string;
    cpfState: string;
    applicationAccount: string;
    creditAccount: string;
}

export default User;

@Component({
    selector: 'app-admission',
    templateUrl: './admission.component.html',
    styleUrls: ['./admission.component.scss'],
})
export class AdmissionComponent implements OnInit {
    cpf: string = '';
    lastCheckedCPF: string = '';

    userData?: User;

    constructor(public cpfService: CpfValidationService) {}

    ngOnInit(): void {}

    handleClick(): void {
        this.lastCheckedCPF = this.cpf;

        if (this.cpfService.checkCPFValidity(this.cpf.replace(/[^\d]/g, ''))) {
            // mocking API request
            this.userData = this.getMockUserData();
        }
    }

    getMockUserData() {
        const users: User[] = [
            {
                name: 'Mariane de Sousa Oliveira',
                cpfState: 'Regular',
                applicationAccount: '557932-4',
                creditAccount: '778461-8',
            },
            {
                name: 'Gabriel Silva Santos',
                cpfState: 'Irregular',
                applicationAccount: '125462-3',
                creditAccount: '920143-5',
            },
            {
                name: 'Pedro Alves Sardenha',
                cpfState: 'Regular',
                applicationAccount: '294220-3',
                creditAccount: '182940-1',
            },
        ];
        return users[Math.floor(Math.random() * 3)];
    }
}
