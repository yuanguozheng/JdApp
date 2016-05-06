/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    Navigator,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import MainScreen from './MainScreen';
import JdWebView from './WebView';

class JdApp extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{name: 'main', index: 0, id:'main'}}
                renderScene={(route, navigator) => JdApp._renderPage(route,navigator)}
            />
        )
    }

    static _renderPage(route, nav) {
        switch (route.id) {
            case 'main':
                return (<MainScreen nav={nav}/>);
                break;
            case 'webview':
                return (<JdWebView url={route.url}/>);
                break;
        }
    }
}

AppRegistry.registerComponent('JdApp', () => JdApp);
