import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import {
    showNotification,
    showScheduleNotification,
    handleNotificationCancel
} from '../handlers/notifications';

export default class TestNotifications extends React.Component {

    onTriggerPressHandle = () => {
        showNotification('Simple notification', 'simple notification triggered, nice work');
        console.log('simple notification triggered');
    }

    onSchedulePressHandle = () => {
        console.log('schedule notification triggered');
        showScheduleNotification('Schedualed notification', 'Schedualed notification triggered, nice work');
    }

    onCancelHandle = () => {
        handleNotificationCancel();
        console.log('cancel notification triggered');
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>Click to try</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onTriggerPressHandle}>
                    <Text style={styles.text}>Simple notification</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSchedulePressHandle}>
                    <Text style={styles.text}>{'--Scheduled notification--\nFire in 5 secondes'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: 'red'}]}
                    onPress={this.onCancelHandle}>
                    <Text style={styles.text}>Cancel all notification</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'dodgerblue',
        height: 80,
        borderRadius: 10,
        margin: 20,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    title: {
        backgroundColor:'dimgrey',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 30,
        height: 100,
        marginBottom: 20,
    }
});