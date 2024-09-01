import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



// function MyApp(){
//   return (
//       <div>
//           <h1>Custom App</h1>
//       </div>
//   )
// }


// const reactElement = {

//   type: 'a',
//   props: {
//       href:'https://google.com' ,
//       target: '_blank'
//   },
//   childern:'click to visit Google'
// }

const NewElemet = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser = "  cybe"

const reactElement = React.createElement(
  'a' ,
  {
    href:'https://google.com' , target:'_blank',
  }, 'click to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
 
 <App/>,
)
