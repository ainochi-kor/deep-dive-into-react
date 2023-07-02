import { useState } from 'react';
import './App.css';
import React from 'react';
import { useCallback } from 'react';
import Modal from './components/Modal';
import MyInput from './components/MyInput';
import { useRef } from 'react';

// const Person = React.memo((props) => {
//   console.log('Person render');
//   const { name, age } = props;
//   return (
//     <div>
//       {name} / {age}
//     </div>
//   )
// });

// const App = () => {
//   const [state, setState] = useState({
//     text: 0,
//     persons: [
//       { id: 1, name: 'Mark', age: 37 },
//       { id: 2, name: 'Jun', age: 28 },
//     ]
//   })

//   const handleChange = (e) => {
//     setState({
//       ...state,
//       text: e.target.value,
//     })
//   }

//   const handleClick = useCallback(() => { }, [])

//   return (
//     <div>
//       <input type="text" value={state.text} onChange={handleChange} onClick={handleClick} />
//       {state.persons.map((person) => {
//         return <Person {...person} key={person.id} />
//       })}
//     </div>
//   )
// }

// const App = () => {
//   const [visible, setVisible] = useState(false);

//   const open = () => {
//     setVisible(true)
//   }

//   const close = useCallback(() => {
//     setVisible(false)
//   }, [])

//   return <div>
//     <button onClick={open}>open</button>
//     {visible && (
//       <Modal>
//         <div style={{
//           width: '100vw',
//           height: '100vh',
//           background: "rgba(0, 0, 0, 0.5)"
//         }}
//           onClick={close}
//         >Hello</div>
//       </Modal>
//     )}
//   </div>
// }

const App = () => {
  const myInputRef = useRef();

  const click = () => {
    console.log(myInputRef.current.value);
  }

  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  )
}

export default App;
