import { Component, Input, OnInit } from '@angular/core';

interface CardContent {
    imgSrc: string;
    span: string;
    text: string;
}

interface CardButton {
    url: string;
    text: string;
}

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() heading: string = '';
    @Input() subheading: string = '';
    @Input() content: CardContent[] = [];
    @Input() button?: CardButton;

    constructor() {}

    ngOnInit(): void {}
}
