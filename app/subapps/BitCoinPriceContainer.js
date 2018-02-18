import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import BitCoinPriceApp from 'bitcoin-price-index';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: BitCoinPriceApp,
  domElementGetter,
});

export function bootstrap(props) {
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  return reactLifecycles.mount(props);
}

export function unmount(props) {
  return reactLifecycles.unmount(props);
}

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('bitcoin-price-app');
  if (!el) {
    el = document.createElement('div');
    el.id = 'bitcoin-price-app';
    document.body.appendChild(el);
  }

  return el;
}