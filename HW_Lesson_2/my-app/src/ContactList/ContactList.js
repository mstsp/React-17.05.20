import React, {Component} from 'react';
import ContactListTable from './ContactListTable'
import ContactListForm from './ContactListForm'

class ContactList extends Component {
    state = {
        contacts: [
            {id: 1, firstName: 'firstName1', lastName: 'lastName1', phone: '456415464'},
            {id: 2, firstName: 'firstName2', lastName: 'lastName2', phone: '456415464'},
            {id: 3, firstName: 'firstName3', lastName: 'lastName3', phone: '456415464'},
            {id: 4, firstName: 'firstName4', lastName: 'lastName4', phone: '456415464'},
        ]
    }

    render() {
        return (
            <>
                <ContactListTable contacts={this.state.contacts}></ContactListTable>
                <ContactListForm></ContactListForm>
            </>
        );
    }
}

export default ContactList;