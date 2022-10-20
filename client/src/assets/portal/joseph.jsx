// import { useState, useRef } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Form from './components/Form';
// import Modal from './components/Modal';

// import './App.css';

// const App = () => {
//   const [show, setShow] = useState(false);
//   const [formData, setFormData] = useState({ name: '', password: '' });

//   const saveUserName = useRef();
//   const inputRef = useRef();

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (formData.name !== '' && formData.password !== '') {
//       saveUserName.current = formData.name;
//       setFormData({ name: '', password: '' });
//       setShow(false);
//     }
//   };

//   const logoutHandler = () => {
//     saveUserName.current = formData.name;
//     setFormData({ name: '', password: '' });
//   };

//   return (
//     <main>
//       <Header
//         name={saveUserName.current}
//         setShow={setShow}
//         logoutHandler={logoutHandler}
//       />
//       <section>
//         <h1>Main content would go here</h1>
//       </section>
//       <Modal show={show} onClose={() => setShow(false)}>
//         <Form
//           changeHandler={changeHandler}
//           submitHandler={submitHandler}
//           formData={formData}
//           inputRef={inputRef}
//         />
//       </Modal>
//       <Footer />
//     </main>
//   );
// };

// export default App;


// fooormmmaa
// import { useEffect } from 'react';

// const Form = ({ changeHandler, submitHandler, formData, inputRef }) => {
//   useEffect(() => {
//     inputRef.current.focus();
//   }, [inputRef]);

//   return (
//     <form>
//       <input
//         type='text'
//         placeholder='Please enter your name'
//         name='name'
//         ref={inputRef}
//         value={formData.name}
//         onChange={changeHandler}
//       />
//       <input
//         type='text'
//         placeholder='Please enter your password'
//         name='password'
//         value={formData.password}
//         onChange={changeHandler}
//       />
//       <button onClick={submitHandler}>Login</button>
//     </form>
//   );
// };

// heaadderrrr
// import React from 'react';

// const Header = ({ name, setShow, logoutHandler }) => {
//   return (
//     <header>
//       <h1>
//         Welcome <span>{name}</span>
//       </h1>
//       <aside>
//         {/* If the userName is undefined or is empty we need to display the login button */}
//         {/* else we display the logout button */}
//         {name === undefined || name.length === 0 ? (
//           <button className='button-show' onClick={() => setShow(true)}>
//             Login
//           </button>
//         ) : (
//           <button className='button-show' onClick={logoutHandler}>
//             Logout
//           </button>
//         )}
//       </aside>
//     </header>
//   );
// };

// export default Header;

// molddaalll
// import ReactDOM from 'react-dom';

// const Modal = ({ show, onClose, children }) => {
//   if (!show) return null;

//   return ReactDOM.createPortal(
//     // First argument
//     <>
//       <div className='overlay' onClick={onClose}></div>
//       <div className='modal'>
//         <div className='modal-children'>
//           <button className='close-button' onClick={onClose}>
//             Close
//           </button>
//           {children}
//         </div>
//       </div>
//     </>,
//     //second argument
//     document.querySelector('#modal')
//   );
// };

// export default Modal;