import { Button, Text, View } from 'react-native';
export default function LikedPost({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>LikedPost Tab</Text>

            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}