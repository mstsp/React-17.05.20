import React, {Component} from 'react';
import ContactListTable from './ContactListTable'
import ContactListForm from './ContactListForm'

class ContactList extends Component {
    state = {
        contacts: [
            {id: 1, firstName: 'firstName1', lastName: 'lastName1', phoneNumber: '456415464'},
            {id: 2, firstName: 'firstName2', lastName: 'lastName2', phoneNumber: '456415464'},
            {id: 3, firstName: 'firstName3', lastName: 'lastName3', phoneNumber: '456415464'},
            {id: 4, firstName: 'firstName4', lastName: 'lastName4', phoneNumber: '456415464'},
        ],
        showForm: false
    }
    addNewContact = (newContact) => {
        newContact.id = Date.now()
        newContact.show = false
        this.setState(
            {
                contacts: [...this.state.contacts, newContact]
            }
        )
    }
    deleteContact = (id) => {
        this.setState(
            {
                contacts: this.state.contacts.filter((item) => item.id !== id)
            })
    }
    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    render() {
        return (
            <div style={container}>
                <div style={header}>Contact list</div>
                <hr/>
                <ContactListTable contacts={this.state.contacts} onDelete={this.deleteContact}></ContactListTable>
                {this.state.showForm
                    ? <ContactListForm onSubmit={this.addNewContact} onClose={this.toggleForm}></ContactListForm>
                    : <button onClick={this.toggleForm} style={add_btn}>Add new contact</button>
                }

            </div>
        );
    }
}

export default ContactList;

const container = {
    maxWidth: '1200px',
    margin: 'auto',
    marginTop: '20px',
    textAlign: 'center'
}

const header = {
    lineHeight: '50px',
    fontSize: '28px'
}

const add_btn = {
    marginTop: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#4682B4',
    color: 'white',
    border: 'none',
    padding: '5px 20px',
    fontSize: '20px'
}
