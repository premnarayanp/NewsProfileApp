import { SafeAreaView } from 'react-native';
import { NativeBaseProvider, Icon, Box, Heading, Center, Text, FlatList } from 'native-base';
import React from 'react';
import DrawerCard from '../components/DrawerCard';
const data = [
    {
        title: 'Home',
        icon: { name: "home", color: "blue.600", size: 17 },
        isNew: false,
        bgColor: 'cyan'
    },
    {
        title: 'Social',
        icon: { name: "account-group", color: 'red.600', size: 10 },
        isNew: false,
    },
    {
        title: 'Politics',
        icon: { name: "doctor", color: "pink.600", size: 10 },
        isNew: false,
    },
    {
        title: 'Entertainment',
        icon: { name: "emoticon", color: "cyan.600", size: 10 },
        isNew: false,
    },
    {
        title: 'Nature',
        icon: { name: "tree", color: "green.600", size: 10 },
        isNew: false,
    },
    {
        title: 'Country',
        icon: { name: "web", color: "blue.400", size: 10 },
        isNew: false,
    },
    {
        title: 'City',
        icon: { name: "city", color: "pink.400", size: 10 },
        isNew: false,
    },
    {
        title: 'Share',
        icon: { name: "share-circle", color: "green.400", size: 10 },
        isNew: false,
    },
    {
        title: 'Rating Review',
        icon: { name: "star-outline", color: "yellow.600", size: 10 },
        isNew: false,
    },
    {
        title: 'mail',
        icon: { name: "mail", color: "green.600", size: 10 },
        isNew: false,
    },
    {
        title: 'WhatsApp',
        icon: { name: "whatsapp", color: "green.600", size: 10 },
        isNew: false,
    },
    {
        title: 'twitter',
        icon: { name: "twitter", color: "blue.600", size: 10 },
        isNew: false,
    },
    {
        title: 'Instagram',
        icon: { name: "instagram", color: "purple", size: 10 },
        isNew: false,
    },
    {
        title: 'Facebook',
        icon: { name: "facebook", color: "blue.600", size: 10 },
    },
    {
        title: 'Sign-Out',
        icon: { name: "logout", color: "purple.600", size: 10 },
    },
    {
        title: 'About',
        icon: { name: "information", color: "purple.600", size: 10 },
    },
];
const CustomDrawer = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Box style={{ backgroundColor: 'white', flex: 1 }}>
                    <Heading size="xl" color="gray" textAlign="center" marginTop="10"> NewsApp </Heading>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => {
                            return (
                                <DrawerCard
                                    title={item.title}
                                    icon={item.icon}
                                    bgColor={item.bgColor}
                                    onClick={() => {
                                        navigation.closeDrawer();
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