import React, {Component} from 'react';
import ContactListTableItem from './ContactListTableItem'

class ContactListTable extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <table>
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
                        <ContactListTableItem item={item} key={item.id}></ContactListTableItem>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ContactListTable;