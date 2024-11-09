import React, {useState} from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

import './UserForm.less';

const UserForm = ({create, quantity}) => {
    const [user, setUser] = useState({name:'', email:'', phone:''})


    const addNewUser = (e) => {
        e.preventDefault()
        
        const newUser = {
            ...user, id: quantity + 1
        }
        create(newUser)
        setUser({name:'', email:'', phone:''})
    }


    return (
        <form>
            <div className="form__title">Введите данные пользователя:</div>
                <div className="input-container">
                    <MyInput 
                        value={user.name}
                        onChange={e => setUser({...user, name: e.target.value})}
                        type="text" 
                        placeholder="имя пользователя"/>
                    <MyInput 
                        value={user.email}
                        onChange={e => setUser({...user, email: e.target.value})}
                        type="text" 
                        placeholder="e-mail пользователя"/>
                    <MyInput 
                        value={user.phone}
                        onChange={e => setUser({...user, phone: e.target.value})}
                        type="text" 
                        placeholder="телефон пользователя"/>
                </div>
                
            <MyButton onClick={addNewUser}>Создать</MyButton>
      </form>
    );
};

export default UserForm;