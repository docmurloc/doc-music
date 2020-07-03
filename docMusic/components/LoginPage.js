import React from "react";
import {connect} from 'react-redux';

import { Text , View} from "react-native";


function LoginPage(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen Login</Text>
        </View>
    );
}

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(LoginPage);