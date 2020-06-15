import React, { Component } from 'react';
import { View, Animated, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { appProducts } from '~/app/constants';
import LoadingView from '../LoadingView';
const DEFAULT_BOTTOM_POSITION = -338
export default class ModalUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: appProducts,
      bottomPosition: new Animated.Value(props.defaultBottomPosition || DEFAULT_BOTTOM_POSITION),
      selectedItem: undefined,
    };
  }

  show = () => {
    this.setState({ visible: true }, () => {
      Animated.timing(
        this.state.bottomPosition,
        {
          toValue: 0,
          duration: 700,
          useNativeDriver: false
        }
      ).start();
    })
  }

  hide = () => {
    Animated.timing(
      this.state.bottomPosition,
      {
        toValue: this.props.defaultBottomPosition || DEFAULT_BOTTOM_POSITION,
        duration: 300,
        useNativeDriver: false
      }
    ).start(() => {
      this.setState({ visible: false })
    });
  }

  showErrorMessage = (message) => {
    this.refs.localFlashMessage && this.refs.localFlashMessage.showMessage({
      message: message,
      type: 'danger'
    })
  }

  showSuccessMessage = (message) => {
    this.refs.localFlashMessage && this.refs.localFlashMessage.showMessage({
      message: message,
      type: 'success'
    })
  }

  render() {
    const { visible } = this.state
    return (
      <Modal visible={visible} onRequestClose={this.hide} transparent={true}>
        <View style={styles.container}>
          <TouchableOpacity onPressOut={this.hide} style={styles.touchBackground} >
          </TouchableOpacity>
          <Animated.View style={[styles.topUpView, { bottom: this.state.bottomPosition }]}>
            <View style={styles.topLine}></View>
            {this.props.ContentComponent}
          </Animated.View>
          <FlashMessage position="top" ref="localFlashMessage" />
          {this.props.loading && <LoadingView />}
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: -1
  },
  touchBackground: {
    flex: 1
  },
  topUpView: {
    position: 'absolute',
    left: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingBottom: 24,
  },
  topLine: {
    opacity: 0.1,
    backgroundColor: '#131415',
    width: 134,
    height: 5,
    alignSelf: 'center',
    marginVertical: 16,
    borderRadius: 100
  },
})

