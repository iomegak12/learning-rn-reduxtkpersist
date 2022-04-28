import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Divider } from 'react-native-paper';

import { AppTitle } from './components/AppTitle';
import { Counter } from './components/Counter';
import { CounterRedux } from './components/CounterRedux';
import { Person } from './components/Person';
import { Age } from './components/Age';

import store, { persistor } from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const MainMarkup = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <AppTitle />
          <Divider style={{ marginVertical: 10 }} />
          <Counter />
          <Divider style={{ marginVertical: 10 }} />
          <CounterRedux />
          <Divider style={{ marginVertical: 10 }} />
          <Person />
          <Divider style={{ marginVertical: 10 }} />
          <Age />
          <Divider style={{ marginVertical: 10 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: 'black'
  }
};

const LoadingMarkup = () => {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </>
  );
};

export default function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={<LoadingMarkup />} persistor={persistor}>
          <PaperProvider theme={theme}>
            <MainMarkup />
          </PaperProvider>
        </PersistGate>
      </ReduxProvider>
    </>
  );
}


