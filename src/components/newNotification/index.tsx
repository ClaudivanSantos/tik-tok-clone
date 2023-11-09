import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { InboxNotification } from "../inboxNotification";

export function NewNotification() {
  return (
    <View>
        <Text className="text-gray-100 text-lg">Novo</Text>
      <InboxNotification
        name="Cristiano Ronaldo"
        url="https://imguol.com/c/esporte/7b/2023/10/13/cristiano-ronaldo-celebra-vitoria-de-portugal-sobre-a-eslovaquia-nas-eliminatorias-da-euro-1697230806138_v2_450x450.jpg"
        follow="Começou a seguir você"
        description="Seguir de volta"
      />
      <InboxNotification
        name="Neymar Jr"
        url="https://i.em.com.br/o8HprTwnqpNuAFtam3R8HonDbXo=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/10/18/1578195/mesmo-sem-apresentar-grande-futebol-atacante-neymar-e-titular-absoluto-e-lider-da-selecao-brasileira_1_47536.jpg"
        follow="Começou a seguir você"
        description="Seguir de volta"
      />
    </View>
  );
}
