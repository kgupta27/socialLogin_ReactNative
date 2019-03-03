/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// 'use strict';

// const FBSDK = require('react-native-fbsdk');

// import React, {Component} from 'react';
// import {
//   Alert,
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   View,
// } from 'react-native';
// const {LoginButton, ShareDialog} = FBSDK;

// class HelloFacebook extends Component {
//   constructor(props) {
//     super(props);
//     const shareLinkContent = {
//       contentType: 'link',
//       contentUrl: 'https://www.facebook.com/',
//     };

//     this.state = {
//       shareLinkContent,
//     };
//   }

//   async shareLinkWithShareDialog() {
//     const canShow = await ShareDialog.canShow(this.state.shareLinkContent);
//     if (canShow) {
//       try {
//         const {isCancelled, postId} = await ShareDialog.show(
//           this.state.shareLinkContent,
//         );
//         if (isCancelled) {
//           Alert.alert('Share cancelled');
//         } else {
//           Alert.alert('Share success with postId: ' + postId);
//         }
//       } catch (error) {
//         Alert.alert('Share fail with error: ' + error);
//       }
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <LoginButton />
//         <TouchableHighlight
//           style={styles.share}
//           onPress={this.shareLinkWithShareDialog.bind(this)}>
//           <Text style={styles.shareText}>Share link with ShareDialog</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   shareText: {
//     fontSize: 20,
//     margin: 10,
//   },
// });

// AppRegistry.registerComponent('HelloFacebook', () => HelloFacebook);
