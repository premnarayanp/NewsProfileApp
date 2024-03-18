import { FlatList, View, ScrollView, NativeBaseProvider, Text } from 'native-base';
import { NewsCard } from '../../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { topHeadLineNews, allNews } from '../../api';
import { addTopHeadingNewsList, addAllNewsList } from '../../redux/action/newsActions';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import CarouselCards from '../../components/Carousel/CarouselCards';
//import { articles } from '../../constants/index';

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
      <ScrollView p='1'>
        <View style={style.topHeadlineNews}>
          <CarouselCards CarouselData={news.topHeadLineNews.articles} />
        </View>

        {
          news.allNews.articles.map((item, index) => <NewsCard article={item} isShowCRUD_Icon={false} key={item.publishedAt} />)
        }
      </ScrollView>
    </NativeBaseProvider>
  );
}



const style = StyleSheet.create({
  topHeadlineNews: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

{/* <FlatList
data={news.allNews.articles}
renderItem={({ item }) => <NewsCard article={item} isShowCRUD_Icon={false} />}
keyExtractor={item => item.publishedAt}
showsVerticalScrollIndicator={false}
/> */}