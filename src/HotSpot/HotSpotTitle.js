import React from 'react';
import { StyleSheet, Text, View, Image, asset, Animated, VrButton  } from 'react-360';

const styles = StyleSheet.create({
  box: {
    width: 300,
    height: 200,
    opacity: 0.8,
    backgroundColor: 'black',
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 5,
    borderRadius: 20,
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    top: 10
  },
  infoPanel: {
    width: 400,
    height: 400,
    opacity: 0.8,
    backgroundColor: 'rgb(255, 200, 50)',
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 5,
    borderRadius: 20,
  },
  image: {
    width: 32,
    height: 32,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    width: 140,
    height: 40,
    backgroundColor: '#5dbea3',
    left: 75,
    top: 25
  },
});

export default class HotSpotTitle extends React.Component {
  get locationStyle() {
    return {
      left: this.props.left,
      top: this.props.top,
      position: 'absolute',
    };
  }
  
  render() {
    console.log(this.props)
    return (
      <View style={[styles.box, this.locationStyle]}>
        <Text style={styles.text}>{`${this.props.text}`}</Text>
        {this.props.text !="" && (
        <VrButton style={styles.button}><Text>Book Now</Text></VrButton>)}
        {this.props.text =="" && (
          <View>
        <Image style={{height:90, width: 90, left: 90 , bottom:170}} source={asset('Virtralogo.png')}></Image>
        <Image style={{height:40, width: 150, left: 60 , bottom:150}} source={asset('concurLogo.png')}></Image>
        </View>)}
      </View>
    );
  }
}
