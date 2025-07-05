import 'react-native-url-polyfill/auto'
import 'react-native-reanimated'
import 'react-native-gesture-handler'

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '~/utils/tamagui'

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    // biome-ignore lint/style/noNonNullAssertion: colorScheme is always defined in this context
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
