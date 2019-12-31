import React from 'react';
import { EditableTimerList } from "./EditableTimerList";

export class TimersDashboard extends React.Component {
    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList/>
                    <ToggleableTimerForm
                        isOpen={true}
                    />
                </div>
            </div>
        )
    }
}