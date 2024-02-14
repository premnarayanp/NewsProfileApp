import { Button, Text, View } from 'react-native';
export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />

      <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>
  );
}