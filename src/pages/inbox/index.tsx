import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NewNotification } from "../../components/newNotification";
import { OlderNotification } from "../../components/olderNotification";

export function Inbox() {
  return (
    <View className="flex-1 bg-black pt-10">
      <View className="flex flex-row justify-around items-center">
        <View>
          <Ionicons name="paper-plane-outline" size={30} color={"#000"} />
        </View>
        <View className="flex flex-row items-center">
          <Text className="text-white text-xl">Todas as atividades</Text>
          <Ionicons name="chevron-down-outline" size={30} color={"#fff"} />
        </View>
        <View>
          <Ionicons name="paper-plane-outline" size={30} color={"#fff"} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NewNotification />
        <OlderNotification />
      </ScrollView>
    </View>
  );
}
