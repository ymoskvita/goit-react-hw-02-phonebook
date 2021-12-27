import React from "react";
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

export default ContactsList;