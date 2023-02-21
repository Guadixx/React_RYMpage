import { useContext, useRef } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import "./Login.css"

const Login = () => {
  const passRef = useRef(null);
  const inputRef = useRef(null);
  const { login } = useContext(UserContext);
  return (
    <main>
     <div className="container">
     <div className="box">
      <div className="form">
        <h2>LOGIN</h2>
        <div className="inputBox">
          <input type="text" placeholder="Username" ref={inputRef} required="required" />
        </div>
        <div className="inputBox">
          <input type="password" placeholder="password" ref={passRef} required="required" />
        </div>
        <button className="button-17" 
          onClick={() => {
            if (inputRef.current.value !== '' && passRef.current.value !== ''){
              login(inputRef.current.value);
              Navigate('/');
            }else {
              return alert('Intruce Usuario y Contraseña para continuar');
            }
        }}>Login</button>
        </div>
        </div>
      </div>
    </main>
  );
};

export default Login;