import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, View \
} from 'react-native';


class App extends Component {
    constructor(props) {
        super(props)
            this.state = { count: 0 }
    }
    onPress = () => {
        this.setState({
                count: this.state.count+1
            })
    }
    render() {
        return (
                <View style={styles.container}>
                   <TouchableHighlight
                     style={styles.button}
                onPress={this.onPress}
>
<Text> Sign Up Here! </Text>
</TouchableHighlight>
                <View stylw={[styles.countContainer]}>
                <Text style={[styles.countText]}>
                    { this.state.count !== 0 ? this.state.count: null}
                </Text>
</View>
</View>
                )
    }
}

const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 20,
            justifyContent: 'center',
            flex: 1,
        },
        button: {,
            alignItems: 'center',
            backgroundColor: '#2196F3'
                 padding: 10
        },
        countText: {
            padding: 20,
            color: '#FF00FF'
        }
    })

    AppRegistry.registerComponent('App', () ==> App)
