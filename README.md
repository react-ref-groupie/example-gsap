# react-ref-groupie GSAP example

> [The example is served on GitHub Pages](https://react-ref-groupie.github.io/example-gsap/) - just follow the link, open devtools and see how it works without cloning this repo.

![](./gifs/usage.gif)

This example project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and it illustrates how to use [react-ref-groupie](https://github.com/react-ref-groupie/react-ref-groupie). It also uses [react-app-rewired](https://github.com/timarney/react-app-rewired) to disable minification on production build to keep component names in React devtools.

To run the example locally use `npm start`. Feel free to tweak source code and learn how `react-ref-groupie` works in development mode.

# What this example shows

In this example app, you can see three different tabs/pages which shows you different approaches you can choose to build your app with `react-ref-groupie`.

All tabs show three components in different variations you need pay attention to:

* `Circles` component
* `Squares` component
* `Halo` component

All three components are animated with GSAP. All three tabs use different approaches to get refs for components and methods to manipulate refs, but config with animation pipelines stays the same.

## Class components usage

This tab beside three components also has panel `Use circles/squares config`. Clicking on one or another will make `Circles` component use circles or squares config. If you click on `Use squares config` and then on `Circles` or `Squares` component it will lead to logging error messages (not throwing errors) into the console to notify you that you have refs clashing between different components and animation will not fire. If you make `Circles` to use circles config - animation will run again.

![](./gifs/incorrect-usage.gif)

> Notice that in order to use `react-ref-groupie` in classes you need to call `getRefGroups` method in components `render` method.

## Stateless hook usage

This tab shows you how you can use `useRefGroups` hook in your stateless components. By using hook you can avoid unnecessary [higher-order component](https://reactjs.org/docs/higher-order-components.html) in your React render tree.

## Stateless HOC usage

Nothing fancy here, this usage example actually similar to class component usage.

# Commands

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

# License

[MIT](LICENSE)