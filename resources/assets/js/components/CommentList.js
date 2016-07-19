import React from 'react';
import { connect, PromiseState } from 'react-refetch';
import PromiseStateContainer from './PromiseStateContainer'
import Delete from 'material-ui/svg-icons/action/delete';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Comment from './Comment';

var CommentList = React.createClass({

    render() {
        return (
            <PromiseStateContainer
                ps={PromiseState.all([this.props.commentsFetch])}
                onFulfillment={([comments]) => {
                      return (
                        <List>
                            <Subheader>Today</Subheader>
                            {this.props.newComments}
                          {comments.map((comment,i) => {
                            return (
                                <Comment key={i} comment={comment} animated={false}/>
                            )
                          })}
                        </List>
                      )
                    }}
            />
        )
    }
});

export default connect(props=>({
    commentsFetch: `/api/comment/${props.task.id}`
}))(CommentList);