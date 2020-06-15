import { useDispatch, useSelector } from 'react-redux'
import { signup } from './actions';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { Localized, showErrorMessage, openLink } from '~/utils';
import { useNavigation } from '@react-navigation/native';
import screens from '~/navigation/screens';
import { appStoreUser } from '~/app/actions';
import { termsUrl, privacyUrl } from '~/api/paths';

const registerValidateSchema = Yup.object().shape({
  email: Yup.string()
    .email(Localized.t('validations.invalid', { 0: Localized.t('controls.email') }))
    .required(Localized.t('validations.required', { 0: Localized.t('controls.email') })),
  password: Yup.string()
    .min(8, Localized.t('validations.minLength', { 0: Localized.t('controls.password'), 1: 8 }))
    .required(Localized.t('validations.required', { 0: Localized.t('controls.password') })),
})

const useSignupFacade = () => {

  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: registerValidateSchema,
    onSubmit: values => dispatch(signup(values)),
  })

  const _onSignup = () => {
    if (!formik.isValid && formik.errors.email || formik.errors.password) {
      return showErrorMessage(formik.errors.email || formik.errors.password)
    }

    formik.handleSubmit()
  }

  //Show error
  const { error, user, isLoading } = useSelector(state => state.signup)
  useEffect(() => {
    error && error.message && showErrorMessage(error.message)
  }, [error])

  //Signup successfully
  useEffect(() => {
    if (user) {
      dispatch(appStoreUser(user))
    }
  }, [user])

  const { navigate } = useNavigation()
  const _onBack = () => {
    navigate(screens.login.name)
  }

  const _onLinkTerms = () => {
    openLink(termsUrl)
  }

  const _onLinkPrivacy = () => {
    openLink(privacyUrl)
  }

  return {
    formik,
    isLoading,
    _onSignup,
    _onBack,
    _onLinkTerms,
    _onLinkPrivacy,
  }
}

export {
  useSignupFacade,
}