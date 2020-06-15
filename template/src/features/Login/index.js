import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Localized } from '~/utils';
import { LabelTextInput } from '~/components';
import Screen from '~/components/Screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useLoginFacade } from './hooks';
import { Button } from 'react-native-elements';
import { colors } from '~/assets/colors';


const Login = (props) => {
  const { formik, isLoading, _onSignup, _onLogin } = useLoginFacade()
  return (
    <Screen barBackgroundColor={colors.backgroundColor}
      barStyle={'dark-content'}
      loading={isLoading}
    >
      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardDismissMode='interactive'
        bounces={false}
      >
        <View style={styles.headerView}>
          <Text style={styles.title}>{Localized.t('login.title')}</Text>
        </View>
        <View style={styles.formContainer}>
          <LabelTextInput
            field='email'
            placeholder={Localized.t('controls.email')}
            {...formik}
            keyboardType='email-address'
            containerStyle={styles.textInput} shouldValid />
          <LabelTextInput
            field='password'
            placeholder={Localized.t('controls.password')}
            {...formik}
            autoCapitalize="none"
            secureTextEntry={true}
            containerStyle={styles.textInput} shouldValid />

          <Button
            title={Localized.t('login.loginButton')}
            onPress={_onLogin}
            containerStyle={styles.loginButton}
          />

          <Button
            title={Localized.t('login.signupButton')}
            type='clear'
            containerStyle={styles.registerButton}
            onPress={_onSignup} />
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  headerView: {
    alignSelf: 'center',
    marginTop: 23,
  },
  title: {
    fontSize: 30,
  },
  formContainer: {
    marginTop: 48,
    marginHorizontal: 20,
  },
  textInput: {
    marginTop: 10,
  },
  loginButton: {
    marginTop: 30
  },
  registerButton: {
    marginTop: 10
  }
})

export default Login;
