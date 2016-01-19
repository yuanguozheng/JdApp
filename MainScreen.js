/**
 * Created by yuanguozheng on 16/1/19.
 */
'use strict';

import React, {
    Component,
    StyleSheet,
    View
} from 'react-native';

import Header from './Header';

export default class MainScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Header />
            </View>
        );
    }
}