import { Button, Text, View } from 'react-native';
export default function SignUp({ route, navigation }) {
    const { itemId, otherParam } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SignUp Screen</Text>

            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>

            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />

            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />

            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}