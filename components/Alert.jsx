

import { Alert, Platform } from 'react-native'


// a funcao Alert.alert nao funciona quando aplicacao aberta no browser
// necessario usar 'alertPolyfill' nesse caso

const alertPolyfill = (title, description, options, extra) => {
    const result = window.confirm([title, description].filter(Boolean).join('\n'))


    if (result) {
        const confirmOption = options.find(({ style }) => style !== 'cancel')

        confirmOption && confirmOption.onPress()
    } else {
        const cancelOption = options.find(({ style }) => style === 'cancel')
        cancelOption && cancelOption.onPress()
    }
}

const alert = Platform.OS === 'web' ? alertPolyfill : Alert.alert

export default alert