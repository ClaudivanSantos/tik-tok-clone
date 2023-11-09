import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function Profile() {
  return (
    <View className="flex-1 bg-black">
      <View className="flex-1 bg-black pt-10">
        <View className="flex flex-row justify-around items-center">
          <View>
            <Ionicons name="person-add-outline" size={30} color={"#fff"} />
          </View>
          <View className="flex flex-row items-center">
            <Text className="text-white text-xl">Claudivan Santos</Text>
            <Ionicons name="chevron-down-outline" size={30} color={"#fff"} />
          </View>
          <View className="flex flex-row gap-2">
            <Ionicons
              name="ellipsis-horizontal-outline"
              size={30}
              color={"#fff"}
            />
          </View>
        </View>
        <View className="flex items-center mt-5 text-center">
          <Image
            source={{
              uri: "https://media.licdn.com/dms/image/D4D03AQG3z-WFGKTD3A/profile-displayphoto-shrink_800_800/0/1683909037378?e=1703721600&v=beta&t=_k6IH67KglqvSp51Mf0VI5FfkStWg8y3KLTputAxWsU",
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              marginRight: 8,
            }}
          />
          <Text className="text-white text-xl mt-2">@claudivan.dev</Text>

          <View className="flex flex-row gap-3">
            <View className="flex justify-center text-center items-center">
              <Text className="text-white text-lg font-bold mt-2">4</Text>
              <Text className="text-white text-lg font-light mt-1">
                Seguindo
              </Text>
            </View>
            <View className="flex justify-center text-center items-center">
              <Text className="text-white text-lg font-bold mt-2">888</Text>
              <Text className="text-white text-lg font-light mt-1">
                Seguidores
              </Text>
            </View>
            <View className="flex justify-center text-center items-center">
              <Text className="text-white text-lg font-bold mt-2">4</Text>
              <Text className="text-white text-lg font-light mt-1">
                Curtidas
              </Text>
            </View>
          </View>

          <View className="flex flex-row gap-2 mt-7">
            <TouchableOpacity className="border border-white">
              <Text className="text-white underline p-3 pr-10 pl-10">
                Editar perfil
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="border border-white">
              <Ionicons
                style={{ padding: 8 }}
                name="bookmark-outline"
                size={30}
                color={"#fff"}
              />
            </TouchableOpacity>
          </View>
          <Text className="text-gray-200 pt-5">
            Toque para adicionar uma biografia
          </Text>

          <View className="flex flex-row items-center gap-8 text-center justify-between">
            <Text className="text-white text-3xl mr-3 underline">|||</Text>
            <Ionicons
              style={{ padding: 8 }}
              name="heart-outline"
              size={30}
              color={"#fff"}
            />
            <Ionicons
              style={{ padding: 8 }}
              name="lock-closed-outline"
              size={30}
              color={"#fff"}
            />
          </View>
          <Image
            source={{
              uri: "https://cdn.icon-icons.com/icons2/1378/PNG/512/imagemissing_92832.png",
            }}
            style={{
              width: 70,
              height: 70,
              marginTop: 18
            }}
          />
          <Text className="text-gray-200 mt-1 text-xl w-1/2 text-center">
            Compartilhe um video de lembrança
          </Text>
          <TouchableOpacity className={`bg-rose-600 rounded-sm mt-5`}>
          <Text className="text-white p-2 pl-8 pr-8">Realizar upload</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
