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
        title: title,
        message: message,
        date: new Date(Date.Now() + 10 * 1000),
    })
}
export const handleNotificationCancel = () => {
    PushNotification.cancelAllLocalNotifications();
}

