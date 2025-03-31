import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, Text, View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Modal() {
  return (
    // <>
    <View className="h-screen-safe-offset-20 w-fit items-center justify-center bg-orange-200">
      {/* <ScreenContent path="app/modal.tsx" title="Modal" /> */}
      <Text>Welcome to VOXA!</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
    // </>
  );
}
