/* Dependencies */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Components Partials
import Note from './Note';

const NoteList = ({ notes }) => {
	return (
		<Grid className = "scssWhite">
			<div className="boxListNote">
				<Row around="lg">
				{
					notes.map((colNote, id) => (
						<Col lg={5} key = {id}>
						{
							colNote.map( note => (
								<Note	key={note.idNote}
										idNote={note.idNote}
										noteTitle= {note.noteTitle}
										noteText = {note.noteText}
								/>
							))
						}
						</Col>
					))
				}
				</Row>
			</div>
		</Grid>
	);
};

NoteList.propTypes = {
    notes:PropTypes.array.isRequired,
};

export default NoteList;
