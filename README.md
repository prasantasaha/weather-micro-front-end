### Overview
This application is usinh `single-spa` (https://github.com/CanopyTax/single-spa) javascript meta framework.

`single-spa` framework we have following advantages:

* Use multiple frameworks on the same page without refreshing the page (React, AngularJS, Angular, Ember, or whatever you're using)
* Write code using a new framework, without rewriting your existing app
* Lazy load code for improved initial load time.

# single-spa documentation

- [Registering applications](https://github.com/CanopyTax/single-spa/blob/master/docs/root-application.md)
- [Building applications](https://github.com/CanopyTax/single-spa/blob/master/docs/applications.md)
- [API reference](https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-api.md)
- [Separating applications out](https://github.com/CanopyTax/single-spa/blob/master/docs/separating-applications.md)
- [Ecosystem](https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-ecosystem)
- [Migrating existing apps](https://github.com/CanopyTax/single-spa/blob/master/docs/migrating-existing-spas.md)


To launch the application locally, run `yarn run dev`. Then you can access the app using  http://localhost:8080/

To deploy the app to Github pages run `npm run deploy`

Note: When importing subapps from `node_modules` we need to make sure `main` in package.json is pointing to the main module e.g. 
```
{
    ...
    "main" : "src/App.js"
    ...
}
```
