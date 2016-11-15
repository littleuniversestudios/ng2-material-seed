import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {routing} from './material-examples.routing';
import {MaterialExamplesComponent} from './material-examples.component';
import {MdCardModule, MdCheckboxModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        routing,
        MdCardModule,
        MdCheckboxModule
    ],
    providers: [],
    declarations: [
        MaterialExamplesComponent
    ],
    exports: []
})
export class MaterialExamplesModule {

}
