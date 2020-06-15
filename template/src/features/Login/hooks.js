import { useDispatch, useSelector } from 'react-redux'
import { login } from './actions';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { Localized, showErrorMessage, showSuccessMessage } from '~/utils';
import { useNavigation } from '@react-navigation/native';
import screens from '~/navigation/screens';
import { appStoreUser, appGetUser } from '~/app/actions';

const loginValidateSchema = Yup.object().shape({
  email: Yup.string()
    .email(Localized.t('validations.invalid', { 0: Localized.t('controls.email') }))
    .required(Localized.t('validations.required', { 0: Localized.t('controls.email') })),
  password: Yup.string()
    .min(8, Localized.t('validations.minLength', { 0: Localized.t('controls.password'), 1: 8 }))
    .required(Localized.t('validations.required', { 0: Localized.t('controls.password') })),
})

const useLoginFacade = () => {
  const { navigate } = useNavigation()
  const _onSignup = () => {
    navigate(screens.signup.name)
  }

  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidateSchema,
    onSubmit: values => dispatch(login(values)),
  })
  const _onLogin = () => {
    if (!formik.isValid && formik.errors.email || formik.errors.password) {
      return showErrorMessage(formik.errors.email || formik.errors.password)
    }
    formik.handleSubmit()
  }

  const { error, user, isLoading } = useSelector(state => state.login)
  useEffect(() => {
    error && error.message && showErrorMessage(error.message)
  }, [error])

  //Login successfully
  useEffect(() => {
    if (user) {
      dispatch(appStoreUser(user))
    }
  }, [user])

  //Auto login
  useEffect(() => {
    dispatch(appGetUser())
  }, [])
  const { currentUser } = useSelector(state => state.app)
  useEffect(() => {
    currentUser && navigate(screens.home.name)
  }, [currentUser])

  return {
    formik,
    isLoading,
    user,
    _onSignup,
    _onLogin,
  }
}

export {
  useLoginFacade,
}