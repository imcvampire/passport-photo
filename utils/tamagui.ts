import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'
import animations from '~/theme/animations'

const tamaguiConfig = createTamagui({
  ...defaultConfig,
  animations,
  settings: {
    ...defaultConfig.settings,
    styleCompat: 'react-native',
    allowedStyleValues: 'strict',
  },
})

export default tamaguiConfig
