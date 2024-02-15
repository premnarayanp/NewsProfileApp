import { Button, Text, View } from 'native-base';
export default function ArticlePost({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>ArticlePost Tab</Text>

            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}