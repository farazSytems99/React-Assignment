const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const database = {
  employees: [
    {
      id: 1,
      employee_name: 'Tiger Nixon',
      skill: 'React JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 2,
      employee_name: 'Garrett Winters',
      skill: 'React JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 3,
      employee_name: 'Ashton Cox',
      skill: 'Angular JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 4,
      employee_name: 'Cedric Kelly',
      skill: 'Node JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 5,
      employee_name: 'Airi Satou',
      skill: 'React JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 6,
      employee_name: 'Brielle Williamson',
      skill: 'Node JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 7,
      employee_name: 'Herrod Chandler',
      skill: 'Node JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 8,
      employee_name: 'Rhona Davidson',
      skill: 'React JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 9,
      employee_name: 'Colleen Hurst',
      skill: 'Angular JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 10,
      employee_name: 'Sonya Frost',
      skill: 'React JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 11,
      employee_name: 'Jena Gaines',
      skill: 'Node JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 12,
      employee_name: 'Quinn Flynn',
      skill: 'Node JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 13,
      employee_name: 'Charde Marshall',
      skill: 'Angular JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 14,
      employee_name: 'Haley Kennedy',
      skill: 'Angular JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 15,
      employee_name: 'Tatyana Fitzpatrick',
      skill: 'Node JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 16,
      employee_name: 'Michael Silva',
      skill: 'Angular JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 17,
      employee_name: 'Paul Byrd',
      skill: 'Node JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 18,
      employee_name: 'Gloria Little',
      skill: 'Angular JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 19,
      employee_name: 'Bradley Greer',
      skill: 'Angular JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 20,
      employee_name: 'Dai Rios',
      skill: 'Angular JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 21,
      employee_name: 'Jenette Caldwell',
      skill: 'Node JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 22,
      employee_name: 'Yuri Berry',
      skill: 'Angular JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 23,
      employee_name: 'Caesar Vance',
      skill: 'Node JS',
      role: 'Developer',
      grade: '7',
    },
    {
      id: 24,
      employee_name: 'Doris Wilder',
      skill: 'Angular JS',
      role: 'Developer',
      grade: '7',
    },
  ],
  departments: [
    {
      id: 1,
      name: 'Software Engg',
    },
    {
      id: 2,
      name: 'Quality Assurance',
    },
  ],
  shifts: [
    {
      id: 1,
      title: 'morning',
    },
    {
      id: 2,
      title: 'night',
    },
  ],
  projects: [
    {
      id: '1',
      controller: '123',
      manager: '457',
      employees: [1, 3, 5, 7],
      department: 1,
      shift: 2,
      date: '2021-02-26',
    },
    {
      id: '2',
      controller: '123',
      manager: '458',
      employees: [2, 4, 6, 8, 13],
      department: 1,
      shift: 1,
      date: '2021-02-27',
    },
    {
      id: '3',
      controller: '124',
      manager: '456',
      employees: [11],
      department: 2,
      shift: 2,
      date: '2021-02-26',
    },
    {
      id: '4',
      controller: '125',
      manager: '456',
      employees: [10, 12, 14, 16],
      department: 1,
      shift: 1,
      date: '2021-02-28',
    },
    {
      id: '5',
      controller: '125',
      manager: '458',
      employees: [15],
      department: 2,
      shift: 2,
      date: '2021-02-27',
    },
    {
      id: '6',
      controller: '124',
      manager: '457',
      employees: [17, 18, 20],
      department: 2,
      shift: 1,
      date: '2021-02-25',
    },
    {
      id: '7',
      controller: '123',
      manager: '457',
      employees: [19, 21, 23],
      department: 2,
      shift: 1,
      date: '2021-02-26',
    },
    {
      id: '8',
      controller: '124',
      manager: '456',
      employees: [22, 24],
      department: 1,
      shift: 2,
      date: '2021-02-25',
    },
    {
      id: '9',
      controller: '123',
      manager: '456',
      employees: [],
      department: 2,
      shift: 2,
      date: '2021-02-28',
    },
  ],
};

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/projects', (req, res) => {
  return res.send(database.projects);
});

server.get('/employees', (req, res) => {
  return res.send(database.employees);
});

server.get('/departments', (req, res) => {
  return res.send(database.departments);
});

server.get('/shifts', (req, res) => {
  return res.send(database.shifts);
});

server.post('/projects', (req, res) => {
  const { employeeId, projectId, previousProjectId } = req.body;

  if (!employeeId || !projectId || !previousProjectId)
    return res.status(400).send({ error: 'Params missing' });

  const source = database.projects.findIndex(
    (project) => project.id == previousProjectId
  );
  const destination = database.projects.findIndex(
    (project) => project.id == projectId
  );

  console.log({ source, destination });

  if (source < 0 || destination < 0)
    res.status(400).send({ error: 'project not found' });

  const filteredEmployees = database.projects[source].employees.filter(
    (emp) => emp != employeeId
  );
  database.projects[source].employees = filteredEmployees;
  database.projects[destination].employees.push(employeeId);

  return res.status(200).send({ message: 'updated' });
});

server.listen(3004, () => {
  console.log('JSON Server is running on 3004...');
});
