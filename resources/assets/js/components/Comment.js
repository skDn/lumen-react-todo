import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

var Comment = React.createClass({
    animated: function () {
        return this.props.animated === true;
    },

    render () {
        return (
            <div className={(this.animated()) ? 'animated fadeInDown' : null}>
                <ListItem
                    disabled={true}
                    leftAvatar={<Avatar src="http://www.albany.edu/campusrecreation/files/Avatar-blank1.jpg" />}
                    primaryText={this.props.comment.comment}
                    secondaryText={this.props.comment.created_at}
                />
                <Divider inset={true}/>
            </div>
        )
    }
});

export default Comment;