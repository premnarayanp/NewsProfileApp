import { FlatList, View } from 'native-base';
import { RecommendedChannelCard } from '../../components/index';
import { recommendedNewsChannel } from '../../constants/index';
export default function RecommendedNewsChannel({ navigation, channel }) {
    return (
        <View p='1'>
            <FlatList
                data={recommendedNewsChannel}
                renderItem={({ item }) => <RecommendedChannelCard channel={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                numColumns="2"
            />
        </View>
    );
}