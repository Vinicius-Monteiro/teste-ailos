import { Component, OnInit } from '@angular/core';

interface Icon {
    src: string;
    alt: string;
}

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    icons: Icon[] = [
        {
            src: '../../../assets/svg/menu.svg',
            alt: 'menu icon',
        },
        {
            src: '../../../assets/svg/search.svg',
            alt: 'search icon',
        },
        {
            src: '../../../assets/svg/star.svg',
            alt: 'favorites icon',
        },
        {
            src: '../../../assets/svg/chat.svg',
            alt: 'chat icon',
        },
        {
            src: '../../../assets/svg/slider.svg',
            alt: 'configurations icon',
        },
        {
            src: '../../../assets/svg/bank.svg',
            alt: 'bank icon',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
