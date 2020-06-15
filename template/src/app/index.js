import React from "react";
import { Provider } from "react-redux";
import store from "~/appStore.js";
import Navigation from "~/navigation";
import FlashMessage from "react-native-flash-message";

export default function App(){
  return (
    <Provider store={store} >
      <Navigation enableURLHandling={false} />
      <FlashMessage position="top" icon="auto" />
    </Provider>
  )
}