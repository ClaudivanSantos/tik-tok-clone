import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface NotificationProps{
    url: string;
    name: string;
    follow: string;
    description: string;
}

export function InboxNotification({url, name, follow, description}:NotificationProps) {

  return (
    <View className="flex flex-row justify-between items-center mb-[-10]">
        <View className="flex flex-row p-5">
        <Image
          source={{
            uri: url,
          }}
          style={{ width: 50, height: 50, borderRadius: 100, marginRight: 8 }}
        />

        <View className="flex justify-center text-center">
          <Text className="text-white font-bold text-base">
            {name}
          </Text>
          <Text className="text-white ">{follow}</Text>
        </View>
        </View>
        <TouchableOpacity className={`bg-rose-600 rounded-sm mr-1`}>
          <Text className="text-white p-2">{description}</Text>
        </TouchableOpacity>
      </View>
  );
}
