import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
    AuthService
 } from './service.index';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        AuthService
    ],
    declarations: []
})
export class ServiceModule { }
