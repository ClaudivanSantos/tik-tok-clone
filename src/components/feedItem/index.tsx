import { Video } from "expo-av";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IDataProps {
  id: string;
  video: string;
  name: string;
  description: string;
}

interface FeedItemProps {
  data: IDataProps; 
  currentItem: any
}

export function FeedItem({ data, currentItem }: FeedItemProps) {
  const [status, setStatus] = useState({});
  const { height: heightScreen } = Dimensions.get("screen");
  const video = useRef(null);

  useEffect(() => {
    if(currentItem.id === data.id){
      video.current.playAsync();
    }else{
      video.current.pauseAsync();
    }
  },[currentItem])

  function handlePlayer() {
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
  }

  return (
    <Pressable onPress={handlePlayer}>
      <View className="absolute z-50 p-4 bottom-24">
        <Text className="text-white font-bold mb-1 text-lg">{data.name}</Text>
        <Text className="text-white font-semibold text-base mr-20">{data.description}</Text>
      </View>

      <View className="absolute z-50 right-5 bottom-32 gap-5">
        <TouchableOpacity>
          <Ionicons name="heart" size={35} color="#fff" />
          <Text className="text-white text-center">30.3K</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="chatbubble-ellipses" size={35} color="#fff" />
          <Text className="text-white text-center">2K</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="bookmark" size={35} color="#fff" />
        </TouchableOpacity>
      </View>

      <Video
        ref={video}
        style={{ width: "100%", height: heightScreen }}
        source={{ uri: data.video }}
        resizeMode="cover"
        shouldPlay={false}
        isMuted={false}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </Pressable>
  );
}
