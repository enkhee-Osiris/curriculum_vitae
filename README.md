[![Build Status](https://travis-ci.org/enkhee-Osiris/curriculum_vitae.svg?branch=develop)](https://travis-ci.org/enkhee-Osiris/curriculum_vitae)
[![Maintainability](https://api.codeclimate.com/v1/badges/fc7423cb3bd49a908d5e/maintainability)](https://codeclimate.com/github/enkhee-Osiris/curriculum_vitae/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fc7423cb3bd49a908d5e/test_coverage)](https://codeclimate.com/github/enkhee-Osiris/curriculum_vitae/test_coverage)

# Curriculum Vitae

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Live: [Here](https://enkhee-osiris.github.io/curriculum_vitae)
MarkDown: [Here](https://github.com/enkhee-Osiris/curriculum_vitae/blob/master/CV.md)

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
**Table of Contents**

- [Curriculum Vitae](#curriculum-vitae)
    - [Folder Structure](#folder-structure)
    - [Available Scripts](#available-scripts)
        - [`npm start`](#npm-start)
        - [`npm run test:lint:js`](#npm-run-testlintjs)
        - [`npm run test:unit`](#npm-run-testunit)
        - [`npm test`](#npm-test)
        - [`npm run build`](#npm-run-build)
        - [`npm run deploy`](#npm-run-deploy)
    - [Cloning](#cloning)

<!-- markdown-toc end -->

## Folder Structure

```
├── CV.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── image.png
│   ├── index.html
│   ├── manifest.json
│   ├── normalize.min.css
│   └── skeleton.min.css
└── src
    ├── components
    │   ├── App.jsx
    │   ├── App.test.jsx
    │   ├── education
    │   │   ├── Education.jsx
    │   │   ├── Education.test.jsx
    │   │   └── __snapshots__
    │   │       └── Education.test.jsx.snap
    │   ├── experience
    │   │   ├── Experience.jsx
    │   │   ├── Experience.test.jsx
    │   │   └── __snapshots__
    │   │       └── Experience.test.jsx.snap
    │   ├── footer
    │   │   ├── Footer.jsx
    │   │   ├── Footer.test.jsx
    │   │   └── __snapshots__
    │   │       └── Footer.test.jsx.snap
    │   ├── header
    │   │   ├── Header.jsx
    │   │   ├── Header.test.jsx
    │   │   ├── __snapshots__
    │   │   │   └── Header.test.jsx.snap
    │   │   └── image.png
    │   ├── hobby
    │   │   ├── Hobby.jsx
    │   │   ├── Hobby.test.jsx
    │   │   └── __snapshots__
    │   │       └── Hobby.test.jsx.snap
    │   ├── list
    │   │   ├── List.jsx
    │   │   ├── List.test.jsx
    │   │   └── __snapshots__
    │   │       └── List.test.jsx.snap
    │   ├── section
    │   │   ├── Section.jsx
    │   │   ├── Section.test.jsx
    │   │   └── __snapshots__
    │   │       └── Section.test.jsx.snap
    │   ├── skill
    │   │   ├── Skill.jsx
    │   │   ├── Skill.test.jsx
    │   │   └── __snapshots__
    │   │       └── Skill.test.jsx.snap
    │   ├── summary
    │   │   ├── Summary.jsx
    │   │   ├── Summary.test.jsx
    │   │   └── __snapshots__
    │   │       └── Summary.test.jsx.snap
    │   └── table
    │       ├── Table.jsx
    │       ├── Table.test.jsx
    │       └── __snapshots__
    │           └── Table.test.jsx.snap
    ├── index.css
    ├── index.js
    ├── registerServiceWorker.js
    ├── setupTests.js
    └── utils
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run test:lint:js`

Launches the `eslint --ext=js --ext=jsx .` command and 
it will check lints of `jx`, `jsx` files. 

### `npm run test:unit`

Launches the test runner in the interactive watch mode.

### `npm test`

Launches the eslint and the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run deploy`

Deploys the built files into the gh-page.<br>
And ready for [live](https://enkhee-osiris.github.io/curriculum_vitae) view.

## Cloning

If you want to clone this project you need to update all variables of `App.jsx`.

```javascript
  const summaryItems = [
    '',
    ...
  ];
  
  const educationDatas = [
    { id: 0, description: '', items: ['', ...] },
    ...
  ];
  
  const skillDatas = {
    '': '',
    ...
  };

  const hobbyItems = [
    '',
    ...
  ];
    
  const experienceDatas = [
    {
      id: 0,
      position: '',
      company: '',
      items: [
        '',
        ...
      ],
      date: '',
    },
    ...
  ];
```
