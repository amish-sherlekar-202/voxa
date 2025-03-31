import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

import { Container } from '~/components/Container';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <View className="flex-1 items-center justify-center">
          <Text className="text-center text-3xl font-bold text-blue-500">Hello</Text>
        </View>
      </Container>
    </>
  );
}
