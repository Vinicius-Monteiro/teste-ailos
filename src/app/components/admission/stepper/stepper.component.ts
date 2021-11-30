import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-stepper',
    template: `
        <ol class="c-stepper">
            <li *ngFor="let step of steps" class="c-stepper__item">
                <h3 class="c-stepper__title">{{ step }}</h3>
            </li>
        </ol>
    `,
    styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
    @Input() steps: string[] = [];

    currentStep: number = 0;

    constructor() {}

    ngOnInit(): void {}
}
