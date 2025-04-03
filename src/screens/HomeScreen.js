import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [identity, setIdentity] = useState('');
  const [token, setToken] = useState('');

  const connectToTwilio = async () => {
    if (!identity.trim()) {
      Alert.alert('Enter your identity');
      return;
    }

    try {
      const response = await fetch(`http://10.0.2.2:8080/voice/token?identity=${identity}`);
      const data = await response.json();

      if (data.token) {
        setToken(data.token);
        Alert.alert('Token received!');
        // Move to Call Screen
        navigation.navigate('Call', { identity, token });
      } else {
        Alert.alert('Failed to get token');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Connection error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Twilio Voice App</Text>
      <TextInput
        placeholder="Enter your identity"
        style={styles.input}
        value={identity}
        onChangeText={setIdentity}
      />
      <Button title="Connect to Twilio" onPress={connectToTwilio} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, justifyContent: 'center',
  },
  heading: {
    fontSize: 20, marginBottom: 20, textAlign: 'center',
  },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15,
  },
});

export default HomeScreen;
