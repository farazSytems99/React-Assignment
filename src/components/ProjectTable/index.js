import { Typography, withStyles } from '@material-ui/core';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import colors from '../../theme/colors';
import { Draggable } from 'react-beautiful-dnd';
import PropTypes, { any } from 'prop-types';

const styles = () => ({
  head: { backgroundColor: colors.secondary, color: 'white' },
  bold: { fontWeight: 'bold' },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.5em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
    },
  },
});

const ProjectTable = (props) => {
  const classes = props.classes;
  const { selectedEmployee, setSelectedEmployee } = props;
  const { id, manager, controller, employees } = props.data;

  return (
    <TableContainer
      style={{
        height: 250,
        backgroundColor: colors.background,
      }}
      component={Paper}
    >
      <Table
        stickyHeader={true}
        className={classes.table}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.head}>
              {`Project No: `} <span className={classes.bold}>{id}</span> <br />
              {`Controller No: `}{' '}
              <span className={classes.bold}>{controller}</span> <br />
              {`Manager No: `} <span className={classes.bold}>{manager}</span>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {employees.length ? (
            employees.map((emp, index) => (
              <Draggable
                key={emp.toString()}
                draggableId={emp.toString()}
                index={index}
              >
                {(provided) => {
                  return (
                    <TableRow
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        backgroundColor:
                          selectedEmployee === emp
                            ? '#cae7eb'
                            : colors.background,
                      }}
                      onClick={() => setSelectedEmployee(emp)}
                      key={emp}
                    >
                      <TableCell
                        style={{ ...provided.draggableProps.style }}
                        align="center"
                        size="small"
                      >
                        {emp}
                      </TableCell>
                    </TableRow>
                  );
                }}
              </Draggable>
            ))
          ) : (
            <div style={{ padding: 5, textAlign: 'center' }}>
              <Typography variant="caption">no employees allocated</Typography>
            </div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

ProjectTable.propTypes = {
  selectedEmployee: PropTypes.bool.isRequired,
  setSelectedEmployee: PropTypes.func.isRequired,
  data: PropTypes.objectOf(any).isRequired,
};

export default withStyles(styles)(ProjectTable);
