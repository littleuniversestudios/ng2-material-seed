import {removeNgStyles, createNewHosts} from '@angularclass/hmr';
import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {CoreModule} from './core/core.module';
import {AppLayoutModule} from './views/app-layout/app-layout.module';
import {MaterialModule} from "@angular/material";

@NgModule({
    imports: [
        BrowserModule,
        routing,
        CoreModule,
        AppLayoutModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) {
    }

    hmrOnInit(store) {
        console.log('HMR store', store);
    }

    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
