# LPM

This is the LPM project repository. LPM stands for Layout Package Manager. 
The Core of the project is the Layout-JSON format, a markup format to describe cross-language layouts:
 
- See the [Layout-JSON specification](https://github.com/dht/lpm/blob/master/specifications/element.md)
 
## Incentive

To improve the process of developing new layouts by borrowing successful code practices:
- Package management: unique layout packages with versioning and dependencies
- Transpilers: transform Layout-JSON to other popular formats
- Tools: online editors, gists , import/export plugins (for Sketch,  Webstorm, etc.)

## Specifications
- Markup: support responsive layouts, variables, placeholders [Layout-JSON specification](https://github.com/dht/lpm/blob/master/specifications/element.md) 
- Packages: support unique identifiers, simple versioning, description [package specification](https://github.com/dht/lpm/blob/master/specifications/package.md)
- Transpilers: to HTML / SASS, ReactJS and React Native 

## Repositories
### Current projects:

#### Core
- [lpm](https://github.com/dht/lpm) Layout-JSON specification, Element component

#### Components
- [movable-canvas](https://github.com/dht/movable-canvas) a ReactJS container with pan and zoom
- [style-panel](https://github.com/dht/style-panel) easy CSS editing for developers (keyboard based)
- [flex-editor](https://github.com/dht/flex-editor) layout WYSIWYG editor in ReactJS

#### Services
- [rnbin](https://github.com/dht/rnbin) collaborative gists for React Native


### Future projects:
- [lpm-cli](https://github.com/dht/lpm-cli) install packages from terminal
- [jupiter](https://github.com/dht/jupiter) visual artboards for large projects
- [htmlbin](https://github.com/dht/htmlbin) collaborative gists for HTML/SASS
- [sketch-lpm](https://github.com/dht/sketch-lpm) Sketch plugin to export layouts from sketch





## Element Component

```sh
npm install lpm-core
```

## Example
[https://dht.github.io/lpm](https://dht.github.io/lpm)

## Usage

Here is a quick example to get you started:

**Import**
```jsx
 import Element from 'lpm-core/Element';
```

**Simple**
```jsx 
<div style={{width: '400px',position: 'fixed',top: 0,left: 0,marginLeft: '60px',zIndex: 999,backgroundColor: 'white',boxShadow: '0 0 5px rgba(0,0,0,0.1)',borderRadius: '1px'}}>
    <Element
        statePath={ 'elements/elements' }
        elementId={ 1 }
    />
</div>
```

Note: **statePath** is the path to the elements in the redux store.

## Contribution
To run locally install all the dependencies:

dev:
```sh
npm install
```

peer:
```sh
npm install react@^15.4.1 react-dom@^15.4.1
```

run with npm:
```sh
npm start
```
and open:[http://localhost:3000](http://localhost:3000)

first test was added as a starting point:
```sh
npm test
```

## Furthor development

### Firbase integration ideas
With [Firebase](https://firebase.google.com/)'s socket-based service, LPM project may explore the following ideas:
  - Live collaboration: see others as they build layouts, build layouts in teams
  - Live loading: layouts loaded in real time by the user's client
  - Tutorials (with redux): replay a process of layout building, learn how it was done

## License
This project is licensed under the terms of the
[MIT license](https://github.com/quickstudio/flex-editor/blob/master/LICENSE)