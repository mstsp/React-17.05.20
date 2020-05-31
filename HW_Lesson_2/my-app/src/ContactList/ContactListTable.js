import React, {Component} from 'react';
import ContactListTableItem from './ContactListTableItem'

class ContactListTable extends Component {
    render() {
        return (
            <table style={contacts_table}>
                <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone number</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.props.contacts.map((item) => (
                    <ContactListTableItem item={item} key={item.id}
                                          onDelete={this.props.onDelete}></ContactListTableItem>
                ))}
                </tbody>
            </table>
        );
    }
}

export default ContactListTable;

const contacts_table = {
    width: '100%',
    textAlign: 'center'
}