import { SafeAreaView } from 'react-native';
import { NativeBaseProvider, Icon, Box, Heading, Center, Text, FlatList } from 'native-base';
import React from 'react';
import DrawerCard from '../components/DrawerCard';
import { useDispatch, useSelector } from 'react-redux';
import { LOCAL_STORAGE_TOKEN_KEY } from '../utils/constants';
import { removeItemFromLocalStorage } from '../utils/index';
import { successLogout } from '../redux/action/authActions';

const data = [
    {
        title: 'Social',
        icon: { name: "account-group", color: 'red.600', size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
    {
        title: 'Politics',
        icon: { name: "doctor", color: "pink.600", size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
    {
        title: 'Entertainment',
        icon: { name: "emoticon", color: "cyan.600", size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
    {
        title: 'Nature',
        icon: { name: "tree", color: "green.600", size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
    {
        title: 'Country',
        icon: { name: "web", color: "blue.400", size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
    {
        title: 'City',
        icon: { name: "city", color: "pink.400", size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
    {
        title: 'Share',
        icon: { name: "share-circle", color: "green.400", size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
    {
        title: 'Rating Review',
        icon: { name: "star-outline", color: "yellow.600", size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
    {
        title: 'mail',
        icon: { name: "mail", color: "green.600", size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
    {
        title: 'WhatsApp',
        icon: { name: "whatsapp", color: "green.600", size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
    {
        title: 'twitter',
        icon: { name: "twitter", color: "blue.600", size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
    {
        title: 'Instagram',
        icon: { name: "instagram", color: "purple", size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
    {
        title: 'Facebook',
        icon: { name: "facebook", color: "blue.600", size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },

    {
        title: 'About',
        icon: { name: "information", color: "purple.600", size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
];

const loginSignUp = [
    {
        title: 'Home',
        icon: { name: "home", color: "blue.600", size: 17 },
        bgColor: 'cyan',
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
    {
        title: 'Login',
        icon: { name: "login", color: 'red.600', size: 10 },
        navigate: 'Login',
        customClick: () => { },
    },
    {
        title: 'SignUp',
        icon: { name: "account-plus", color: 'red.600', size: 10 },
        navigate: 'SignUp',
        customClick: () => { },
    },
];

const logOut = [
    {
        title: 'Home',
        icon: { name: "home", color: "blue.600", size: 17 },
        bgColor: 'cyan',
        navigate: 'BottomTabNavigator',
        customClick: () => { },
    },
    {
        title: 'Sign-Out',
        icon: { name: "logout", color: "purple.600", size: 10 },
        navigate: 'BottomTabNavigator',
        customClick: (dispatch) => {
            removeItemFromLocalStorage(LOCAL_STORAGE_TOKEN_KEY);
            dispatch(successLogout({ isLogout: true, user: null }));
        },
    },
];

const CustomDrawer = ({ navigation }) => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.authReducer);
    // if (auth.user) {
    //     data = [...logOut, ...data]
    // } else {
    //     data = [...loginSignUp, ...data]
    // }

    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Box style={{ backgroundColor: 'white', flex: 1 }}>
                    <Heading size="xl" color="gray" textAlign="center" marginTop="10"> NewsApp </Heading>
                    <FlatList
                        data={auth.user ? [...logOut, ...data] : [...loginSignUp, ...data]}
                        renderItem={({ item, index }) => {
                            return (
                                <DrawerCard
                                    title={item.title}
                                    icon={item.icon}
                                    bgColor={item.bgColor}
                                    onClick={() => {
                                        item.customClick(dispatch);
                                        navigation.closeDrawer();
                                        navigation.navigate(item.navigate);
                                    }}
                                />
                            );
                        }}
                    />
                </Box>
            </SafeAreaView>
        </NativeBaseProvider>
    );
};

export default CustomDrawer;