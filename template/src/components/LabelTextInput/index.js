import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Animated, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { mainFont } from '~/assets/fonts';
import { colors } from '~/assets/colors';

const LabelTextInput = ({ handleChange, handleBlur, values, errors, field, dirty, shouldValid, inputStyle, placeholder, containerStyle, ...inputProps }) => {
  const isValid = shouldValid && dirty && !errors[field]
  const isInvalid = shouldValid && dirty && errors[field]
  const { position, isFieldActive, _handleFocus, _handleBlur } = useLabelTextInputFacade({ value: values[field], onFocus: inputProps.onFocus, handleBlur, field })

  return (
    <View style={containerStyle}>
      <Animated.Text
        style={[styles.label, _returnAnimatedTitleStyles({ isFieldActive, position })]}
      >
        {placeholder}
      </Animated.Text>
      <View style={[styles.inputContainer, isValid ? styles.valid : isInvalid ? styles.invalid : undefined]}>
        <TextInput
          value={values[field]}
          style={[styles.textInput, inputStyle]}
          underlineColorAndroid='transparent'
          onFocus={_handleFocus}
          onBlur={_handleBlur}
          onChangeText={handleChange(field)}
          {...inputProps}
        />
        {/* {isValid && <Image source={icons.valid} style={styles.validIcon} />} */}
        {/* {isValid && <Icon name='check' color={colors.primaryColor} size={20} />} */}
        {isInvalid && <Icon name='error' color={colors.dangerColor} size={20} />}
      </View>
    </View>
  )
};

const _returnAnimatedTitleStyles = ({ isFieldActive, position }) => {
  return {
    top: position.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 0],
    }),
    ...(isFieldActive ? styles.activeStyle : styles.inactiveStyle),
  }
}

const useLabelTextInputFacade = ({ field, value, onFocus, handleBlur }) => {
  const [isFieldActive, setIsFieldActive] = useState(false)
  const [position, setPosition] = useState(new Animated.Value(value ? 20 : 0))
  const _handleFocus = useCallback(() => {
    if (!isFieldActive) {
      setIsFieldActive(true)
      Animated.timing(position, { toValue: 1, duration: 150, useNativeDriver: false }).start();
    }
    onFocus && onFocus()
  })

  const _handleBlur = useCallback(() => {
    if (isFieldActive && !value) {
      setIsFieldActive(false)
      Animated.timing(position, { toValue: 0, duration: 150, useNativeDriver: false }).start();
    }
    handleBlur(field)
  })

  return {
    position,
    isFieldActive,
    _handleFocus,
    _handleBlur,
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: 52,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(125,93,192,0.1)',
  },
  label: {
    fontFamily: mainFont.regular,
    fontWeight: "400",
    fontSize: 14,
    position: 'absolute',
    color: colors.placeholderColor
  },
  textInput: {
    fontSize: 15,
    flex: 1,
    color: colors.textColor,
  },
  container: {
    paddingHorizontal: 0
  },
  valid: {
    borderBottomColor: colors.primaryColor
  },
  invalid: {
    borderBottomColor: colors.dangerColor
  },
  activeStyle: {
    fontSize: 14
  },
  inactiveStyle: {
    fontSize: 16
  },
  validIcon: {
    width: 20,
    height: 20
  },
})
export default LabelTextInput;
