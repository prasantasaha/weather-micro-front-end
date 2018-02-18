import 'reflect-metadata';
import singleSpaAngular from 'single-spa-angular2';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from 'weather-app-angular/src/app/app.module';
import { Router } from '@angular/router';

const ngLifecycles = singleSpaAngular({
    domElementGetter,
    // mainModule: AppModule,
    angularPlatform: platformBrowserDynamic(),
    template: `<location-search-angular></location-search-angular>`,
    Router,
})

export function bootstrap(props) {
    return ngLifecycles.bootstrap(props);
}

export function mount(props) {
    return ngLifecycles.mount(props).then(val => { });
}

export function unmount(props) {
    return ngLifecycles.unmount(props);
}

function domElementGetter() {
    // Make sure there is a div for us to render into
    let el = document.getElementById('location-search-angular');
    if (!el) {
        el = document.createElement('div');
        el.id = 'location-search-angular';
        document.body.appendChild(el);
    }

    return el;
}