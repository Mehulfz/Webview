import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Web extends Component {
  render() {
    return <WebView source={{ uri: 'https://www.google.com/' }} />;
  }
}
export default Web