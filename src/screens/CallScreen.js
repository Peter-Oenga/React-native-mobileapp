import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CallScreen = ({ route }) => {
  const { identity, token } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {identity} 👋</Text>
      <Text style={styles.text}>Your Twilio token is ready.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 10 },
});

export default CallScreen;
