import { SafeAreaView, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";

export function Search() {
    const inputRef = useRef(null);
    const abrirTeclado = () => {
        inputRef.current.focus();
      };

      useEffect(() => {
        abrirTeclado();
      },[])
  return (
    <View className=" flex-1 bg-black pt-10">
      <SafeAreaView className="flex flex-row justify-center ">
        <TextInput
        className="bg-gray-400 pt-1 pb-1 border rounded-sm w-4/5 pl-3"
        placeholder={"Pesquise aqui"}
        ref={inputRef}
        />
        <Ionicons name="scan-outline" size={30} color={'#fff'} />
      </SafeAreaView>
    </View>
  );
}
