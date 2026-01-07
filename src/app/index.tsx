import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-2xl font-bold">
        NativeWind is working 🚀
      </Text>

      <Text className="text-gray-400 mt-3">
        Edit app/index.tsx to update this screen
      </Text>
    </View>
  );
}
