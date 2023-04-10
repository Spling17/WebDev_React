import React from 'react'
import ReactDOM from 'react-dom'
import SnsInfo from './components/SnsInfo'

// class App extends React.Component {
//     render(){
//         return(
//             <h1>Hello World~</h1>
//         )
//     }
// }

const App = () => {
    return (    
        <>
          <SnsInfo />
        </>
    )
}

const rootNode = document.getElementById('root')
ReactDOM.render(<App />, rootNode)