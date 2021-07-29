import { withStyles } from '@material-ui/core';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import colors from '../../theme/colors';

const styles = (theme) => ({
  container: {
    // width: 300,
    height: theme.spacing(53.5),
    marginTop: theme.spacing(10),
  },
  head: { backgroundColor: colors.secondary, color: 'white' },
});

const renderRow = (label, value) => {
  return (
    <TableRow>
      <TableCell
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: colors.background,
        }}
        size="small"
      >
        <span>{label}</span>{' '}
        <span style={{ textAlign: 'right' }}>{value ?? ''}</span>
      </TableCell>
    </TableRow>
  );
};

const EmployeeTable = (props) => {
  const classes = props.classes;
  const { data } = props;

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table
        stickyHeader={true}
        className={classes.table}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" size="small" className={classes.head}>
              Employee Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderRow('Employee No.', data?.id)}
          {renderRow('Emp. Name', data?.employee_name)}
          {renderRow('Controller', data?.controller)}
          {renderRow('Manager', data?.manager)}
          {renderRow('Project', data?.project)}
          {renderRow('Skill', data?.skill)}
          {renderRow('Role', data?.role)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default withStyles(styles)(EmployeeTable);
