import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';

import './userFilter.less'

const UserFilter = ({filter, setFilter}) => {
    return (
        <>
            <MyInput
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
                placeholder='поиск...'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="cортировка"
                options={[
                    {value: "name", name: "По имени"},
                    {value: "id", name: "По порядку"}
                ]}
            />
        </>
    );
};

export default UserFilter;