import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

export const notificationsInit = () => {

    PushNotification.createChannel({
        channelId: 'channel-id-1',
        channelName: 'channel-name-1',
        playSound: true,
        soundName: 'default',
        importance: 4,
        vibrate: true,
    }, (created) => colnsloe.log(`createChannel returned '${created}'`)
    );

    PushNotification.configure({
        onRegister: function (token) {
            console.log('TOKEN:', token);
        },
        onNotification: function (notification) {
            console.log('NOTIFICATION:', notification);
        },
        permissions: {
            alert: true,
            badge: true,
            sound: true,
        },
        requestPermissions: Platform.OS === 'ios',
        popInitialNotification: true,
    });
}
