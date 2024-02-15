import { FlatList, View } from 'native-base';
import { NewsCard } from '../components/index';
import { articles } from '../constants/index';
export default function ArticlePost({ navigation }) {
    return (
        <View p='1'>
            <FlatList
                data={articles}
                renderItem={({ item }) => <NewsCard article={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}