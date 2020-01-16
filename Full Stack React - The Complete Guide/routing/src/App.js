import React from 'react';
import Atlantic from "./components/Atlantic";
import Pacific from "./components/Pacific";
import Route from "./router/Route";

class App extends React.Component {
  render() {
    return (
      <div className='ui text container'>
        <h2 className='ui dividing header'>
          Which body of water?
        </h2>
        <ul>
          <li>
            <a href="/atlantic">
              <code>/atlantic</code>
            </a>
          </li>
          <li>
            <a href="/pacific">
              <code>/pacific</code>
            </a>
          </li>
        </ul>
        <hr/>

        <Route path='/atlantic' component={Atlantic} />
        <Route path='/pacific' component={Pacific} />
      </div>
    )
  }
}
export default App;
