export const columns = [
  {
    columnDef: 'id',
    header: 'ID',
    type: '',
    cell: (element: any) => `${element.id}`,
  },
  {
    columnDef: 'name',
    header: 'Full Name',
    type: 'titlecase',
    cell: (element: any) => `${element.name}`,
  },
  {
    columnDef: 'username',
    header: 'Username',
    type: 'titlecase', // titlecase , datetime , bytes , number
    cell: (element: any) => `${element.username}`,
  },
  {
    columnDef: 'lang',
    header: 'Language',
    type: '',
    // class: true, // we this this filed to control value of columns ,>>
    // then in data-table directive we can put a condition for this column to changing style example
    cell: (element: any) => `${element.lang}`, // we can have a slice to values `${element.resources?.slice(0, 50)}`
  },
  {
    columnDef: 'role',
    header: 'Role',
    type: 'number',
    cell: (element: any) => `${element.role}`,
  },
  {
    columnDef: 'email',
    header: 'Email',
    type: '',
    cell: (element: any) => `${element.email}`,
  },
  // we can have a button in columns table, then we can control css of that button in parent component by class css in below
  // {
  //   columnDef: 'popups',
  //   header: 'Popups btn',
  //   type: '',
  //   class: true,
  //   button: {
  //     status: true,
  //     permission: 'user:update',
  //     icon: 'credit_score',
  //     label: 'Popups btn',
  //     class: 'Popups btn',
  //   },
  // },

  // we can have a route link column
  // {
  //   columnDef: 'full_name',
  //   header: 'role link',
  //   type: '',
  //   route: '/roles/',
  //   routeId: 'role_id',
  //   cell: (element: any) => `${element.first_name} ${element.last_name}`,
  // },
  {
    columnDef: 'action',
    header: 'Action',
    actionPermission: 'user:write',
    cell: (element: any) => ``,
    id: (element: any) => `${element.id}`,
    sort: false,
    dynamicBtn: [
      {
        name: 'delete',
        icon: 'delete',
        path: '',
        class: 'mat-delete',
        actionPermission: 'user:write',

      },
      {
        name: 'edit',
        icon: 'edit',
        path: '',
        class: 'mat-edit',
        actionPermission: 'user:write',
      }
    ],
  },
];
