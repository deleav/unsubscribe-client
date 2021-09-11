import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='main-content' className="App-header">
        <h1>Subscription info</h1>
        <table cellSpacing='24'>
          <thead>
            <tr>
              <td>Service Name</td>
              <td>Expired Date</td>
              <td>Subscription Info Page</td>
            </tr>
          </thead>
          <tbody>
            <tr id='netflix'>
              <td>Netflix</td>
              <td className='date'></td>
              <td><a href='https://www.netflix.com/BillingActivity' target='_blank' rel="noreferrer">Go to page</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
