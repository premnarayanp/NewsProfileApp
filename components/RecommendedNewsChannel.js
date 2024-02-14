import { StyleSheet } from 'react-native';
import { Center, Text, Avatar, Button, IconButton, Icon, FlatList, VStack } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function Profile({ navigation, channel }) {
    return (
        <VStack maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        }} _web={{
            shadow: 2,
            borderWidth: 0
        }} _light={{
            backgroundColor: "gray.50"
        }}>


            <IconButton position="absolute" top='0' right='0' icon={<Icon color="black" size="md" as={MaterialCommunityIcons} name="close" />} />

            <Center>
                <Avatar bg="pink.600" alignSelf="center" size="xl" source={{
                    uri: channel.avatarUrl
                }}>
                    GG
                </Avatar>
                <Text fontSize="md" bold>{channel.channelName}</Text>
            </Center>

            <Text fontSize="sm"> Follow by {channel.followBy[0] + ", " + channel.followBy.length + "+.."}</Text>
            <Button>Follow</Button>
        </VStack>
    );
}

const styles = StyleSheet.create({
    btnColorLightPink: {
        backgroundColor: "#b38080",
    }
});