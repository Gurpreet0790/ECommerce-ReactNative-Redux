/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.log('I am coming into Index file.js file');

AppRegistry.registerComponent(appName, () => App);
