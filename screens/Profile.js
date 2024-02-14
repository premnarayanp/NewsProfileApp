import { Button, Text, View } from 'react-native';
export default function Profile({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>

            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />

            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}