import React, {Component} from 'react';

class ContactListTableItem extends Component {
    onDeleteClick = (e) => {
        
    }
    render() {
        return (
            <tr>
                <td>{this.props.item.firstName}</td>
                <td>{this.props.item.lastName}</td>
                <td>{this.props.item.id}</td>
                <td>
                    <i className="material-icons">edit</i>
                    <i className="material-icons" onClick={this.onDeleteClick}>delete</i>
                </td>
            </tr>
        );
    }
}

export default ContactListTableItem;