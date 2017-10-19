# PopScience / Exodes Charnels
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

## Install
```sh
$ npm install 
# OR 
$ yarn install
```

## Build a release
```sh
$ npm run build
# OR 
$ yarn build
```
Then you need to copy the `build` folder onto your server. 

## Deploy on surge.sh
In order to deploy on surge you need to have surge configured
```sh
$ npm install -g surge
$ surge login
```

Then to deploy run:
```sh
$ npm run deploy
# OR 
$ yarn deploy
```

## Run locally
```sh
$ npm run start
# OR 
$ yarn start
```

## Customize the look
The style is defined in many components. Here is a small summary of the different aspect you can customize.

### Change how is rendered markdown-based pages (Introduction, Conclusion, About)
You need to change the style defined in the main component `components/atoms/Content/styles.css` but you may also need to customize the style in the custom rendering components:
- `components/atoms/BlockQuote/styles.css`
- `components/atoms/Image/styles.css`


## Add a page to the application

### 1. Create the page base component.
All pages base components are located under `components/pages/`. 
So, in order to add a page you need to create a new component (or copy a previous page).
```sh
touch src/content/credits.md
cp src/component/pages/Conclusion.js component/pages/Credits.js
```
Then edit Credits as the following:
```diff
import React from 'react';

import PageTemplate from 'components/templates/PageTemplate'; 
import ContentContainer from 'containers/Content';
import Content from 'components/atoms/Content';

-import content from 'content/conclusion.md';
+import content from 'content/credits.md';

-const Conclusion = () => (
+const Credits = () => (
  <PageTemplate>
    <ContentContainer>
      <Content source={content}/>
    </ContentContainer>
  </PageTemplate>
);

-export default Conclusion;
+export default Credits;

```

### 2. Add it to the exported pages
Open `components/pages/index.js` import then export your new page.

```js
// ... other pages imports.
import Credit from './Credits';

export {
  ...otherPagesExports,
  Credits,
};
```

### 3. Import this component in `App.js`
You then need to add this new page component to `App.js` and use it with a `<Route>` component.
For instance if I want to add a page located at `<website url>/credits`:

```jsx
// App.js
import {
  Credits,
  ...otherPagesImports
} from 'components/pages';

<Router>
  { /* other routes */ }
  <Route path='/credits' component={Credits} />
</Router>
```

### 4. Add a navigtion tab to the navbar
1. Create a component for the tab (you can copy another tab to do that, `components/molecules/ConclusionTab` for instance.
2. Edit it to have the proper link and text
3. Import it in `components/organisms/Navbar/index.js` and add it to the existing tabs. 
