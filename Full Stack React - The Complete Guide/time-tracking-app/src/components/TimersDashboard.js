import React from 'react';
import { EditableTimerList } from "./EditableTimerList";
import { ToggleableTimerForm } from "./ToggleableTimerForm";
import uuid from 'react-uuid';

export class TimersDashboard extends React.Component {
    state = {
      timers: [
          {
              title: 'Practice Squat',
              project: 'Gym Chores',
              id: uuid(),
              elapsed: 5456099,
              runningSince: Date.now()
          },
          {
              title: 'Bake Squash',
              project: 'Kitchen Chores',
              id: uuid(),
              elapsed: 1273998,
              runningSince: null
          }
      ]
    };

    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList
                        timers={this.state.timers}
                    />
                    <ToggleableTimerForm
                        isOpen={true}
                    />
                </div>
            </div>
        )
    }
}