import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CpfValidationService {
    isValid: boolean = false;

    constructor() {}

    checkCPFValidity = (parsedCPF: string) => {
        this.isValid = true;

        let sum = 0;
        let module = 0;

        if (parsedCPF === '00000000000') {
            this.isValid = false;
        } else {
            for (let i = 0; i < 9; i++) {
                sum += Number(parsedCPF.charAt(i)) * (10 - i);
            }

            module = (sum * 10) % 11;

            if (module === 10 || module === 11) module = 0;

            if (String(module) !== parsedCPF.charAt(9)) {
                this.isValid = false;
            } else {
                sum = 0;
                for (let i = 0; i < 10; i++) {
                    sum += parseInt(parsedCPF.charAt(i)) * (11 - i);
                }

                module = (sum * 10) % 11;

                if (module === 10 || module === 11) module = 0;

                if (String(module) !== parsedCPF.charAt(10)) {
                    this.isValid = false;
                }
            }
        }
        return this.isValid;
    };
}
