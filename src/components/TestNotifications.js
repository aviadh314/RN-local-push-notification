import { Button } from 'react-native';

export class TestNotification extends React.Component {

    onTriggerPressHandle = () => {
        console.log('trigger notification pressed');
    }

    onSchedulePressHandle = () => {
        console.log('schedule notification pressed');
    }

    onCancelHandle = () => {
        console.log('cancel notification pressed');
    }

    render() {
        return (
            <>
                <Button onPress={this.onTriggerPressHandle()}>Trigger simple notification</Button>
                <Button onPress={this.onSchedulePressHandle()}>Trigger schedule notification</Button>
                <Button onPress={this.onCancelHandle()}>Clear all notifications</Button>
            </>
        );
    }
}