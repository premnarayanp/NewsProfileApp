import { Button, Text, View } from 'react-native';
export default function BookMark({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>BookMark Tab</Text>

            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}