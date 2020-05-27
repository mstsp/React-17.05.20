import React, {Component} from 'react';

class ContactListTableItem extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.item.firstName}</td>
                <td>{this.props.item.lastName}</td>
                <td>{this.props.item.phone}</td>
                <td></td>
            </tr>
        );
    }
}

export default ContactListTableItem;