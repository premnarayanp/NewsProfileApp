import { StyleSheet } from 'react-native';
import { NativeBaseProvider, HStack, VStack, Center, Text, Avatar, ScrollView, Button, IconButton, Icon, FlatList, View } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ArticlePost, BookMark, LikedPost, RecommendedNewsChannel } from '../tabScreen/index';

export default function Profile({ navigation }) {
    const Tab = createMaterialTopTabNavigator();

    return (
        <NativeBaseProvider>
            <HStack space={3} justifyContent="center" alignItems='center'>

                <Center>
                    <Avatar bg="pink.600" alignSelf="center" size="xl" source={{
                        uri: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80"
                    }}>
                        GG
                    </Avatar>
                    <Text fontSize="md" bold>Premnarayan Patel</Text>
                </Center>

                <Center>
                    <Text fontSize="xl" bold>5</Text>
                    <Text fontSize="md">Post</Text>
                </Center>

                <Center>
                    <Text fontSize="xl" bold>10</Text>
                    <Text fontSize="md">Followers</Text>
                </Center>

                <Center>
                    <Text fontSize="xl" bold>100</Text>
                    <Text fontSize="md">Following</Text>
                </Center>
            </HStack>

            <HStack justifyContent="space-between" alignItems='center'>
                <Button style={styles.btnColorLightPink} px="8" py='0.5'>Edit Profile</Button>
                <Button style={styles.btnColorLightPink} px="8" py='0.5'>Share Profile</Button>
                <IconButton style={styles.btnColorLightPink} padding="0.5" icon={<Icon color="black" size="lg" as={MaterialCommunityIcons} name="account-plus" />} />
            </HStack>

            <NavigationContainer independent={true}>
                <Tab.Navigator
                    initialRouteName="ArticlePost"
                    screenOptions={{
                        tabBarActiveTintColor: '#e91e63',
                    }}
                >
                    <Tab.Screen name="ArticlePost" component={ArticlePost}
                        options={{
                            tabBarLabel: () => null,//'ArticlePost',
                            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="newspaper" color={color} size={20} />),
                        }} />

                    <Tab.Screen name="RecommendedNewsChannel" component={RecommendedNewsChannel}
                        options={{
                            tabBarLabel: () => null,//'Recommended',
                            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account-multiple-plus-outline" color={color} size={20} />),
                        }} />

                    <Tab.Screen name="BookMark" component={BookMark}
                        options={{
                            tabBarLabel: () => null,//'BookMark',
                            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="bookmark" color={color} size={20} />),
                        }} />
                    <Tab.Screen name="LikedPost" component={LikedPost}
                        options={{
                            tabBarLabel: () => null,//'LikedPost',
                            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="heart" color={color} size={20} />),
                        }} />
                </Tab.Navigator>
            </NavigationContainer>

        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    userInfo: {
        padding: 10,
    },

    btnColorLightPink: {
        backgroundColor: "#b38080",
    }
});