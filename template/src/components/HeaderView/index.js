import React from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { icons } from '~/assets/icons';
import { mainFont } from '~/assets/fonts';
import { colors } from '~/assets/colors';

export const defaultHeader = {
  title: undefined,
  height: 114,
  onBack: undefined
}

const HeaderView = (props) => {
  const { title, height, onBack } = { ...defaultHeader, ...props }
  return (
    <View
      style={{ height: height }}>
      <StatusBar  barStyle='light-content' />
      <View style={styles.headerContainer}>
      {!!onBack && <Button style={styles.leftButton} icon={<Image source={icons.back}/>} type='clear'/>}
      {!!title && <Text style={styles.title}>{title}</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: mainFont.regular,
    fontSize: 24,
    color: colors.buttonTextColor
  },
  leftButton: {
    marginRight: 20,
  },
  headerContainer: {
    marginTop: 52,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default HeaderView;
