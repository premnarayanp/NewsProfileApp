import { StyleSheet } from 'react-native';
import { Center, Text, Avatar, Button, IconButton, Icon, VStack, HStack, Image } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function NewsCard({ navigation, article, isShowCRUD_Icon = true, CRUD_IconName = "dots-vertical", CRUD_IconColor = "black" }) {
    const [showLess, setShowLess] = useState(true);
    const authorAvatar = require('../assets/my_photos.png');
    return (
        <VStack width="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="2" mb='2'
            justifyContent="space-between"
            _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>


            <HStack justifyContent="space-between" borderColor="coolGray.300" borderBottomWidth="1" alignItems="center" pl="2" pr="2">
                <Avatar bg="pink.600" alignSelf="center" size="md" source={authorAvatar}></Avatar>
                <Text fontSize="md" bold>{article.author}</Text>
                {isShowCRUD_Icon && <IconButton icon={<Icon color={CRUD_IconColor} size="md" as={MaterialCommunityIcons} name={CRUD_IconName} />} />}
            </HStack>

            <Image width={550} height={250} resizeMode={"cover"} alt='hi' source={{ uri: article.urlToImage }} />


            <VStack p="2" height={showLess ? "200" : "container"}>
                <Text fontSize="lg" bold color="coolGray.300">{article.title}</Text>
                <Text fontSize="md" bold>{article.description} <Text>|Published Date: {article.publishedAt}|</Text> </Text>
                <Text fontSize="sm" >{article.content}</Text>
            </VStack>

            <Button borderRadius={'20'} margin={'1'} onPress={() => { setShowLess(!showLess) }}>{showLess ? "More.." : "Show Less"}</Button>
        </VStack>
    );
}

const styles = StyleSheet.create({
    btnColorLightPink: {
        backgroundColor: "#b38080",
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'cover'
    },
    moreBtn: {
        fontSize: "sm",
        alignSelf: "flex-end",
        borderRadius: 40,
        margin: 5,
        maxWidth: '100%'
    }
});
