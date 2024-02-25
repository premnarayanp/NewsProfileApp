import { View, Image, TouchableOpacity, IconButton } from 'react-native';
import React from 'react';
import { NativeBaseProvider, Icon, Text, HStack } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const DrawerCard = ({
    newColor,
    title,
    icon,
    bgColor,
    onClick,
}) => {
    return (
        <TouchableOpacity
            style={{
                width: '100%',
                backgroundColor: bgColor ? bgColor : '#fff',
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                paddingHorizontal: 15,
                paddingVertical: 15,
            }}
            onPress={() => {
                onClick();
            }}>

            <HStack justifyContent='space-between' alignItems={'center'}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '700',
                    color: '#8e8e8e',
                }}>{title}</Text>
                <Icon as={<MaterialCommunityIcons name={icon.name} />} color={icon.color} size="25" />
            </HStack>
        </TouchableOpacity>
    );
};

export default DrawerCard;
