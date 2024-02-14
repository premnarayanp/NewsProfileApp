import { StyleSheet } from 'react-native';
import { NativeBaseProvider, HStack, VStack, Center, Text, Avatar, ScrollView, Button, IconButton, Icon, FlatList } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { RecommendedNewsChannel } from '../components/index';
import { recommendedNewsChannel } from '../constants/index';

export default function Profile({ navigation }) {
    return (
        <NativeBaseProvider>
            <ScrollView
                showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
                showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
                padding={"1"} paddingBottom={"0"}
            >
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
                    <IconButton style={styles.btnColorLightPink} padding="1" icon={<Icon color="black" size="lg" as={MaterialCommunityIcons} name="account-plus" />} />
                </HStack>

                <FlatList
                    data={recommendedNewsChannel}
                    horizontal={true}
                    renderItem={({ item }) => <RecommendedNewsChannel channel={item} />}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    marginTop="5"
                />

            </ScrollView>

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