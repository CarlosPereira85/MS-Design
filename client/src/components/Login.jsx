import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import { useRef, useState } from "react";
import Modal from "./Modal";
import './Login.css';

const Login = () => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({ name: '', password: '' });
  
    const saveUserName = useRef();
    const inputRef = useRef();
  
    const changeHandler = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const submitHandler = (e) => {
      e.preventDefault();
      if (formData.name !== '' && formData.password !== '') {
        saveUserName.current = formData.name;
        setFormData({ name: '', password: '' });
        setShow(false);
      }
    };
  
    const logoutHandler = () => {
      saveUserName.current = formData.name;
      setFormData({ name: '', password: '' });
    };
  
    return (
      <div>
        <LoginHeader
          name={saveUserName.current}
          setShow={setShow}
          logoutHandler={logoutHandler}
        />
        <section>
          <h1>Main content would go here</h1>
        </section>
        <Modal show={show} onClose={() => setShow(false)}>
          <LoginForm
            changeHandler={changeHandler}
            submitHandler={submitHandler}
            formData={formData}
            inputRef={inputRef}
          />
        </Modal>
      
      </div>
    );
  };
  
  export default Login;