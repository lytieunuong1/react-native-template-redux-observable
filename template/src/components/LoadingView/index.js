import { StyleSheet, View, ActivityIndicator, } from 'react-native'
import React from 'react'
import { colors } from '~/assets/colors';

const LoadingView = ({ style, color }) => {
  return (
    <View style={[styles.container, style,]}>
      <ActivityIndicator color={color || colors.primaryColor} size='large'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 999,
  },
})

export default LoadingView
