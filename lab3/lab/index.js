import React from 'react'
import ReactDOM from 'react-dom'
import '../lab/styles.css'
import ChallengeOne from './components/ChallengeOne'
import ChallengeTwo from './components/ChallengeTwo'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <h1>React Lab 102</h1>
        <button onClick={this.toggle} className='btn large'>Toggle</button>
        {/* Import Components (ChallengeOne and Challenge Two) here */}
            <ChallengeOne />
            <ChallengeTwo />
      </div>
    );
  }
}

const rootNode = document.getElementById('root')
ReactDOM.render(<App />, rootNode)
