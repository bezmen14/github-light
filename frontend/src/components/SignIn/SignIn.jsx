import SignUp from '../SignUp/SignUp.module.css'
import styleContainer from '../Container/container.module.css'
import React from 'react';
import { useEffect, useState } from 'react'
import { getFormUserDataAuth } from '../../redux/actionCreators/userAC';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SignIn() {
    const dispatch = useDispatch()
    const history = useHistory();
    const HomeButton = () => {
      history.push("/");
  }
  const user = useSelector(state => state.user)

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    
    const inputHandlerEmail = (event) => {
        setInputEmail(event.target.value)
    }
    const inputHandlerPassword = (event) => {
        setInputPassword(event.target.value)
    }

    useEffect(()=> {
      if(user.id) {
        localStorage.setItem('name', user.name)
        HomeButton();
      }
    },[user]);

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(getFormUserDataAuth(inputEmail, inputPassword))
    }

    return (
      <React.Fragment>
            <div className={styleContainer.container + ' ' + SignUp.containerSignUp}>
                <div className={SignUp.wrapperEntranceUser}>
                    <div className={SignUp.HeaderformTop}>
                        Authorization
                    </div>
                    <form className={SignUp.Headerform} onSubmit={submitHandler} action="">
                        <input required onChange={inputHandlerEmail} maxLength="30" className={SignUp.inputHeaderForm} type="email" name="email" placeholder="Введите email" />
                        <input required onChange={inputHandlerPassword} maxLength="30" className={SignUp.inputHeaderForm} type="password" name="password" placeholder="Password" />
                        <button className={SignUp.HeaderFormButton} type="submit">Войти</button>
                    </form>
                </div>
            </div>
            </React.Fragment>

    )
}

export default SignIn
