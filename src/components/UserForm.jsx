import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const UserForm = ({create}) => {
    const [user, setUser] = useState({name:'', email:'', phone:''})


    const addNewUser = (e) => {
        e.preventDefault()
        
        const newUser = {
            ...user, id: Date.now()
        }
        create(newUser)
        setUser({name:'', email:'', phone:''})
    }


    return (
        <form>
            <h2 style={{textAlign: 'center', marginBottom: 15}}>Введите данные пользователя:</h2>
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
            <MyButton style={{marginTop: 15}} onClick={addNewUser}>Создать</MyButton>
      </form>
    );
};

export default UserForm;