import React, {Component} from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  componentDidMount() {

  }

  render(){
    const {counter} = this.state;
    return (
      <View>
        <Text style={styles.counter}> Contador: {this.state.counter} </Text>
        <Text style={styles.counter}> Contador: {counter} </Text>
        <View style={styles.view}>
          <Button style={styles.button} title="Incrementar" onPress={() => this.setState({counter: this.state.counter + 1})} />
          <Button style={styles.button} title="Decrementar" onPress={() => this.setState({counter: this.state.counter - 1})} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    marginTop: 20,
  },
  counter: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    marginTop: 50,
    display: 'flex',
    color: 'red',
    marginTop: 10,
  }
});



export default Home;