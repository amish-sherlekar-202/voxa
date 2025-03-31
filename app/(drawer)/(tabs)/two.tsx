import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Two' }} />
      <Container>
        <View className="flex-1 items-center justify-center">
          <Text>Tab Two Screen</Text>
        </View>
      </Container>
    </>
  );
}
