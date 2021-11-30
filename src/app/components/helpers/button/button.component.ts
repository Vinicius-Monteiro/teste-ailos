import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-button',
    template: `<button [ngClass]="type" [disabled]="disabled">
        {{ text }}
    </button>`,
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    @Input() text: string = '';
    @Input() type: 'filled' | 'outlined' | 'text' = 'filled';
    @Input() disabled: boolean = false;

    constructor() {}

    ngOnInit(): void {}
}
