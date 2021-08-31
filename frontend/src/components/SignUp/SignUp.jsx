import style from './SignUp.module.css'
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styleContainer from '../Container/container.module.css'
import { useHistory } from "react-router-dom";
import { getFormUserData } from '../../redux/actionCreators/userAC';
import React from 'react';

function SignUp() {
    const dispatch = useDispatch()
    const history = useHistory();

    const [inputUser, setInputUser] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const user = useSelector(state => state.user)
    console.log('юзер---->', user);

    const inputHandlerName = (event) => {
        setInputUser(event.target.value)
    }
    const inputHandlerEmail = (event) => {
        setInputEmail(event.target.value)
    }
    const inputHandlerPassword = (event) => {
        setInputPassword(event.target.value)
    }


    const HomeButton = () => {
        history.push("/");
    }
    
    const submitHandler = (event) => {
      event.preventDefault()
      dispatch(getFormUserData(inputUser, inputEmail, inputPassword))
      setInputUser('')
      setInputEmail('')
      setInputPassword('')
  }
  useEffect(()=> {
    if(user.id) {
      
      localStorage.setItem('name', user.name)

      HomeButton()
    }
  },[user]);

    


    return (
<React.Fragment>
            <div className={styleContainer.container + ' ' + style.containerSignUp}>
                <div className={style.wrapperEntranceUser}>
                    <div className={style.HeaderformTop}>
                        Account registration
                    </div>
                    <form onSubmit={submitHandler} className={style.Headerform} action="">
                        <input required onChange={inputHandlerName} className={style.inputHeaderForm} type="text" name="name" placeholder="Введите имя" />
                        <input required onChange={inputHandlerEmail} className={style.inputHeaderForm}  type="email" name="email" placeholder="Введите email" />
                        <input required onChange={inputHandlerPassword} className={style.inputHeaderForm}  type="password" name="password" placeholder="Введите password" />
                        <button className={style.HeaderFormButton} type="submit">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
            </React.Fragment>

    )
}

export default SignUp
