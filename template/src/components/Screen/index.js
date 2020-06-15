import React from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoadingView from '~/components/LoadingView';
import HeaderView from '~/components/HeaderView';

const Screen = ({ children, barBackgroundColor, barStyle, loading, headerProps }) => (
  <View style={styles.container}>
    {!!headerProps && <HeaderView {...headerProps} />}
    <SafeAreaView style={styles.container} >
      {!headerProps && <StatusBar backgroundColor={barBackgroundColor} barStyle={barStyle} />}
      {children}
    </SafeAreaView>
    {loading && <LoadingView />}
  </View>

);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})
export default Screen;
