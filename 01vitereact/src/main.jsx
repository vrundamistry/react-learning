import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return (
        <div>
            <h2>Custom App</h2>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click here to go to Google'
// }

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = 'Nimesh'

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click here to go to Google',
    anotherUser
)   

createRoot(document.getElementById('root')).render(
    // <App />

    // <MyApp />

    reactElement
)
