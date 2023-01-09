# Micro FrontEnds Demo
This is a simple demo project, created to understand how to connect different applications with Module Federation using a Micro FrontEnd architecture. 

Remotes applications were hosted on aws, but they can be ran locally the same way as the host application.

This project also uses a custom Generic Compoment Library created with npm.

### Run Project

```
cd host
npm start
```

### Dependencies
```
react 18.2.0
webpack 5.75.0
html-webpack-plugin 5.5.0
webpack-cli 5.0.1
bootstrap 5.2.3
react-router-dom 6.6.1
qnd_component_library_demo 0.1.4
```

### Resources

Here are all the articles and resources used on the development of this project:

Module Federation
- https://betterprogramming.pub/how-to-use-webpack-module-federation-in-react-70455086b2b0
- https://blog.jakoblind.no/css-modules-webpack/
- https://stackoverflow.com/questions/32070303/uncaught-referenceerror-react-is-not-defined
- https://dev.to/bitovi/how-to-build-a-micro-frontend-with-webpacks-module-federation-plugin-n41

Error Boundary
- https://blog.bitsrc.io/react-error-handling-and-logging-best-practices-4444c57cd666

Public URL
- https://stackoverflow.com/questions/50824024/urierror-failed-to-decode-param-public-url-favicon-ico

NPM 
- https://medium.com/hackernoon/creating-a-library-of-react-components-using-create-react-app-without-ejecting-d182df690c6b
- https://zellwk.com/blog/publish-to-npm/

React Router
- https://v5.reactrouter.com/web/guides/quick-start
- https://github.com/jagadish-k/routing-module-federation
- https://stackoverflow.com/questions/72768822/micro-frontend-by-module-federation-with-react-router-dom-v
- https://bobbyhadz.com/blog/react-usehref-may-only-be-used-in-context-of-router#:~:text=The%20error%20%22useHref()%20may,only%20within%20the%20Router%20context.
- https://reactjs.org/docs/react-api.html#reactsuspense
- https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually

AWS
- https://dev.to/oyetoket/how-to-deploy-your-frontend-application-on-aws-s3-31m9
- https://medium.com/swlh/deploying-micro-frontends-to-aws-step-by-step-using-react-webpack-5-and-module-federation-3f97f6f1658c