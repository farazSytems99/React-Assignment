import {
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import { filter } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmployeeTable from '../components/EmployeeTable';
import ProjectTable from '../components/ProjectTable';
import colors from '../theme/colors';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { assignEmployee } from '../actions/user';

const styles = (theme) => ({
  heading: {
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: theme.spacing(5),
  },
  textField: {
    // width: 300,
    marginTop: theme.spacing(2),
  },
  submit: {
    alignSelf: 'flex-end',
    marginTop: theme.spacing(3),
    backgroundColor: colors.primary,
    color: 'white',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  caption: {
    marginBottom: theme.spacing(3),
  },
});

const ProjectAllocation = (props) => {
  const classes = props.classes;
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employeeData, setEmployeeData] = useState();
  const [projects, setProjects] = useState([]);
  const [date, setDate] = useState('');
  const [shift, setShift] = useState('');
  const [department, setDepartment] = useState('');

  const reduxProjects = useSelector((state) => state.userReducer.projects);
  const employees = useSelector((state) => state.userReducer.employees);
  const departments = useSelector((state) => state.userReducer.departments);
  const shifts = useSelector((state) => state.userReducer.shifts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (date || shift || department) {
      onSubmit();
    } else {
      setProjects(reduxProjects);
    }
  }, [reduxProjects]);

  useEffect(() => {
    let assignedProject = projects.filter((project) =>
      project.employees.includes(selectedEmployee)
    );
    assignedProject = assignedProject[0];

    let empData = employees.filter((emp) => emp.id === selectedEmployee);
    if (empData.length) {
      setEmployeeData({
        ...empData[0],
        project: assignedProject.id,
        manager: assignedProject.manager,
        controller: assignedProject.controller,
      });
    }
  }, [selectedEmployee]);

  const applyFilters = (filters) => {
    let filteredProjects = filter(reduxProjects, filters);
    setProjects(filteredProjects);
  };

  const onSubmit = () => {
    const filters = {};
    if (date) filters['date'] = date;
    if (shift) filters['shift'] = shift;
    if (department) filters['department'] = department;

    Object.keys(filters).length && applyFilters(filters);
  };

  const onDrop = (e) => {
    console.log(e);
    const { source, draggableId, destination } = e;
    if (source && destination && source.droppableId !== destination.droppableId)
      dispatch(
        assignEmployee({
          previousProjectId: parseInt(source.droppableId),
          employeeId: parseInt(draggableId),
          projectId: parseInt(destination.droppableId),
        })
      );
  };

  const renderFilters = () => {
    return (
      <div className={classes.form} noValidate>
        <Typography className={classes.caption} variant="caption">
          Select from below to filter visible projects
        </Typography>
        <TextField
          id="date"
          label="Date"
          type="date"
          value={date}
          defaultValue={new Date().toLocaleDateString()}
          variant="outlined"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setDate(e.target.value)}
        />
        <Select
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          variant="outlined"
          displayEmpty
          className={classes.textField}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            Shift
          </MenuItem>
          {shifts.map((shift) => (
            <MenuItem value={shift.id}>{shift.title}</MenuItem>
          ))}
        </Select>
        <Select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          variant="outlined"
          displayEmpty
          className={classes.textField}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            Department
          </MenuItem>
          {departments.map((dept) => (
            <MenuItem value={dept.id}>{dept.name}</MenuItem>
          ))}
        </Select>
        <Button
          onClick={onSubmit}
          size="medium"
          variant="contained"
          className={classes.submit}
        >
          Display
        </Button>
      </div>
    );
  };

  return (
    <Container>
      <Typography className={classes.heading} variant="h5">
        PROJECT WISE - EMPLOYEE ALLOCATION
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={3}>
          {renderFilters()}
          {<EmployeeTable data={employeeData} />}
        </Grid>
        <Grid style={{ display: 'flex', flexDirection: 'column' }} item xs={9}>
          <Typography style={{ marginBottom: 5 }} variant="caption">
            Below tables show the employees allocated to different projects. You
            can drag and drop an employee to re-assign them.
          </Typography>
          <DragDropContext onDragEnd={onDrop}>
            <Grid container spacing={4}>
              {projects &&
                projects.map((project, index) => (
                  <Grid className={classes.table} item xs={3}>
                    <Droppable key={index} droppableId={`${project.id}`}>
                      {(provided) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            <ProjectTable
                              data={project}
                              selectedEmployee={selectedEmployee}
                              setSelectedEmployee={setSelectedEmployee}
                            />
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </Grid>
                ))}
            </Grid>
          </DragDropContext>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(ProjectAllocation);
