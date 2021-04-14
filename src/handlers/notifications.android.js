import PushNotification from 'react-native-push-notification';

export const showNotification = (title, message) => {
    PushNotification.localNotification({
        channelId: 'channel-id-1',
        title: title,
        message: message,
    })
}
export const showScheduleNotification = (title, message) => {
    PushNotification.localNotificationSchedule({
        channelId: 'channel-id-1',
        title: title,
        message: message,
        date: new Date(Date.now() + 3 * 1000),
        allowWhileIdle: true, 
    })
}
export const handleNotificationCancel = () => {
    PushNotification.cancelAllLocalNotifications();
}

