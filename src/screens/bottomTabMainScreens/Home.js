import { FlatList, View, NativeBaseProvider } from 'native-base';
import { NewsCard } from '../../components/index';
import { articles } from '../../constants/index';
export default function Home({ navigation }) {
  return (
    <NativeBaseProvider>
      <View p='1'>
        <FlatList
          data={articles}
          renderItem={({ item }) => <NewsCard article={item} isShowCRUD_Icon={false} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </NativeBaseProvider>
  );
}