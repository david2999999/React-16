import React from 'react';
import { EditableTimerList } from "./EditableTimerList";
import { ToggleableTimerForm } from "./ToggleableTimerForm";
import { newTimer } from "../js/Helpers";
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

    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    };

    handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    };

    createTimer = (timer) => {
        const t = newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t)
        });
    };

    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project
                    });
                } else {
                    return timer;
                }
            })
        });
    };

    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList
                        timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                    />
                    <ToggleableTimerForm
                        onFormSubmit={this.handleCreateFormSubmit}
                    />
                </div>
            </div>
        )
    }
}