import { FlatList, View } from 'native-base';
import { NewsCard } from '../../components/index';
import { articles } from '../../constants/index';
export default function LikedPost({ navigation }) {
    return (
        <View p='1'>
            <FlatList
                data={articles}
                renderItem={({ item }) => <NewsCard article={item} CRUD_IconName="heart" CRUD_IconColor="#e91e63" />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}