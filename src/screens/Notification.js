import { Button, Text, View } from 'react-native';
export default function Notification({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Notification Screen</Text>

            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />

            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}