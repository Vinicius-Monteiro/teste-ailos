import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-input',
    template: `
        <input
            type="text"
            [placeholder]="placeholder"
            [(ngModel)]="inputValue"
            (ngModelChange)="inputValueChange.emit(formatCPF(inputValue))"
            [maxLength]="14"
        />
    `,
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
    @Input() placeholder: string = '';

    @Input() inputValue: string = '';
    @Output() inputValueChange: EventEmitter<string> =
        new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    formatCPF(cpf: string) {
        const parsedCPF = cpf.replace(/[^\d]/g, '');
        const formattedCPF = parsedCPF.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            '$1.$2.$3-$4'
        );

        return formattedCPF;
    }
}
