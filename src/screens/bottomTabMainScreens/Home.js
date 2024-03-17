import { FlatList, View, NativeBaseProvider } from 'native-base';
import { NewsCard } from '../../components/index';
import { articles } from '../../constants/index';
import { useDispatch, useSelector } from 'react-redux';
import { topHeadLineNews, allNews } from '../../api';
import { addTopHeadingNewsList, addAllNewsList } from '../../redux/action/newsActions';
import { useEffect } from 'react';

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.newsReducer);

  useEffect(() => {
    async function fetchData() {
      const response = await topHeadLineNews();
      if (response.success) {
        dispatch(addTopHeadingNewsList({ topHeadLineNews: response.data.news }));
      }

      const allNewsResponse = await allNews();
      if (allNewsResponse.success) {
        dispatch(addAllNewsList({ allNews: allNewsResponse.data.news }));
      }
    }
    fetchData();
  }, []);
  //console.log("----topNews----", topNews);

  return (
    <NativeBaseProvider>
      <View p='1'>
        <FlatList
          data={news.allNews.articles}
          renderItem={({ item }) => <NewsCard article={item} isShowCRUD_Icon={false} />}
          keyExtractor={item => item.publishedAt}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </NativeBaseProvider>
  );
}