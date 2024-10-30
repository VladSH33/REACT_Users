import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const UserFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
                placeholder='поиск...'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: "name", name: "По имени"},
                    {value: "age", name: "По возрасту"}
                ]}
            />
        </div>
    );
};

export default UserFilter;