import { Dimensions, FlatList, Text, TouchableOpacity, View } from "react-native";
import { feedItems } from "../../utils/array";
import { FeedItem } from "../../components/feedItem";
import { useRef, useState } from "react";

export function Home() {
  const [showItem, setShowItem] = useState(feedItems[0]);
  const { height: heightScreen } = Dimensions.get("screen");
  const onViewRef = useRef(({viewableItems})=>{
    if(viewableItems && viewableItems.length > 0) {
      setShowItem(feedItems[viewableItems[0].index])
    }
  })

  return (
    <View className="bg-black flex-1">
      <View
        className={`flex-row items-center justify-center gap-3 absolute top-6 left-0 right-0 mt-4 z-50`}
      >
        <TouchableOpacity>
          <Text className="text-slate-200 text-base font-semibold">
            Seguindo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="text-white text-base font-semibold">Pra você</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={feedItems}
        renderItem={({ item }) => (
          <FeedItem data={item} currentItem={showItem} />
        )}
        onViewableItemsChanged={onViewRef.current}
        snapToAlignment="center"
        snapToInterval={heightScreen}
        scrollEventThrottle={200}
        decelerationRate={"fast"}
        viewabilityConfig={{
          waitForInteraction: false,
          viewAreaCoveragePercentThreshold: 100
        }}
      />
    </View>
  );
}
