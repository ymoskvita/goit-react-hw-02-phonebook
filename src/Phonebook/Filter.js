import React from "react";
import { InputStyled } from './Phonebook.styled'

const Filter = ({ value, onChange }) => (
    <label>Find contacts by name
        <InputStyled type="text" value={value} onChange={onChange} />
    </label>
)

export default Filter;