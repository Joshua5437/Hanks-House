import Backdrop from '@/components/my-components/Backdrop';
import Header from '@/components/my-components/Header';
import Main from '@/components/my-components/Main';
import React from 'react';

import { StyleSheet, View } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <Backdrop />
      <Header />
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default Index;
