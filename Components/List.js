import React from 'react';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const List = (props) => {

    return (
        <div>
            {props.arrays.map((value, index) => {

                return <Paper key={index} className="table-list"><Grid container spacing={1}>

                    <Grid item md={2}>
                        <Checkbox checked={value.isCompleted} onChange={() =>
                            props.handleCheck(value, index)}
                            inputProps={{ 'aria-label': 'controlled' }} />
                    </Grid>
                    <Grid item md={7}>
                        <div className={`result ${value.isCompleted ? 'completed' : ''}`}>{value.text}</div>
                    </Grid>
                    <Grid item md={3}>
                        <button type="button" className="edit-button" onClick={() => props.handleEdit(value.text, index)}> <EditIcon /> </button>

                        <button type="button" className="delete-button" onClick={() => props.handleDelete(index)}> <DeleteIcon /> </button>
                    </Grid>
                </Grid></Paper>
            })}
        </div>
    )
}
export default List;
// `${}` its template literals (multiple classname kudukalam)