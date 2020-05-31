import React, {Component} from 'react';

class ContactListTableItem extends Component {
    onDeleteClick = () => {
        this.props.onDelete(this.props.item.id)
    }

    render() {
        return (
            <tr>
                <td>{this.props.item.firstName}</td>
                <td>{this.props.item.lastName}</td>
                <td>{this.props.item.phoneNumber}</td>
                <td>
                    <i className="material-icons" onClick={this.onDeleteClick}>delete</i>
                </td>
            </tr>
        );
    }
}

export default ContactListTableItem;