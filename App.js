/**
 * p2pUI App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/**import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

type Props = {};

/**
class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            count: 10,
        };
    }

    render() {
        return (
		<View style={styles.container}>
                <Text style={styles.welcome}>Welcome to P2P Blockchain!</Text>
                <Text style={styles.instructions}>To get started, click below!</Text>
                <View style={styles.container}>
		<TouchableHighlight style={styles.button} onPress={this.onPress}>
                        <Text> Sign Up Here! </Text>
                    </TouchableHighlight>
		<View style={styles.countContainer}>
		<Text style={styles.countText}>
		    {this.state.count !== 0 ? this.state.count : null}
                        </Text>
                    </View>
                </View>
            </View>
		);
    }
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    justifyContent: "center",
	    alignItems: "center",
	    backgroundColor: "#F5FCFF"
	},
	welcome: {
	    fontSize: 20,
	    textAlign: "center",
	    margin: 10
	},
	instructions: {
	    textAlign: "center",
	    color: "#333333",
	    marginBottom: 10
	},
	button: {
	    alignItems: "center",
	    backgroundColor: "#20B2AA",
	    width: 150,
	    padding: 10
	},
	countText: {
	    padding: 20,
	    color: "#FF00FF"
	}
    });

export default App;

**/









import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableHighlight, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


export default class App extends Component<Props>{
    /** constructor(props) {                                                                                                                                        
    super(props);                                                                                                                                           
    this.state = {                                                                                                                                          
	count: 10,                                                                                                                                          
    };                                                                                                                                                      
    }**/
   render() {
    return (                                                                                                                                               
	    /** <View style={styles.container}>                                                                                                                 
	      <Text style={styles.welcome}>Welcome to P2P Blockchain!</Text>                                                                                  
	     <Text style={styles.instructions}>To get started, click below!</Text>                                                                           
	     <View style={styles.container}>                                                                                                                 
	     <TouchableHighlight style={styles.button} onPress={this.onPress}>                                                                                              <Text> Sign Up Here! </Text>                                                                                                            
                    </TouchableHighlight>                                                                                                                      
	           <View style={styles.countContainer}>                                                                                                          
	      <Text style={styles.countText}>                                                                                                              
			{this.state.count !== 0 ? this.state.count : null}                                                                                          
                        </Text>                                                                                                   
                    </View>                                                                                                                                    
                </View>                                                                                                                                         
            </View>**/  
	     <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to p2pBlockchain!</Text>
        <Text style={styles.instructions}>To get started, click below!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

/**const styles = StyleSheet.create({                                                                                                                              
        container: {                                                                                                                                            
            flex: 1,                                                                                                                                            
            justifyContent: "center",                                                                                                                           
            alignItems: "center",                                                                                                                               
            backgroundColor: "#F5FCFF"                                                                                                                          
        },                                                                                                                                                      
        welcome: {                                                                                                                                              
            fontSize: 20,                                                                                                                                       
            textAlign: "center",                                                                                                                                
            margin: 10                                                                                                                                          
        },                                                                                                                                                      
        instructions: {                                                                                                                                         
            textAlign: "center",                                                                                                                                
            color: "#333333",                                                                                                                                   
            marginBottom: 10                                                                                                                                    
        },                                                                                                                                                      
        button: {                                                                                                                                               
            alignItems: "center",                                                                                                                               
            backgroundColor: "#20B2AA",                                                                                                                         
            width: 150,                                                                                                                                         
            padding: 10                                                                                                                                         
        },                                                                                                                                                     
	    countText: {                                                                                                                                            
            padding: 20,                                                                                                                                        
            color: "#FF00FF"                                                                                                                                    
        }                                                                                                                                                       
    });                                                                                                                                                         
                                                                                                                                                              
export default App;
**/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});