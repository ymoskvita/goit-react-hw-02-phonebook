import React from "react";
import PropTypes from 'prop-types';
import { List, Item, Btn} from './Phonebook.styled'


const ContactsList = ({ contacts, onDeleteContact }) => (
    <List>
        {contacts.map(({ id, name, number }) => (
            <Item key={id}>
                <p>{name}</p>
                <p>{number}</p>
                <Btn onClick={() => onDeleteContact(id)}>Delete</Btn>
            </Item>
        ))}
    </List>
);

ContactsList.propTypes = {
    contacts: PropTypes.array,
    onDeleteContact:PropTypes.func,
}
export default ContactsList;