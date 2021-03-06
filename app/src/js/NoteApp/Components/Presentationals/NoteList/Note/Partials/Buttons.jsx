import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/delete';
import ContentUpdate from 'material-ui/svg-icons/action/update';
import { Link } from 'react-router-dom';
const style = {
    marginRight: 20,
  };

const Buttons = ({ idNote, history }) => {
    return(
        <div>
            <Link to={`/note/${idNote}/edit`}>
                <FloatingActionButton mini={true} style={style} backgroundColor = "#34495E" >
                    <ContentUpdate />
                </FloatingActionButton>
            </Link>
            <Link to={`/note/${idNote}/delet`}>
                <FloatingActionButton mini={true} style={style} backgroundColor = "#2ECC71">
                    <ContentAdd />
                </FloatingActionButton>
            </Link>
        </div>

    );};

export default Buttons;
