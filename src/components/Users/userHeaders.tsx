import * as React from 'react';
import { Table } from '../../shared';

export const userTableColumnClasses = {
  name: 'pf-m-width-20',
  role: 'pf-u-w-25-on-lg pf-u-w-25-on-sm pf-u-w-16-on-xs',
  email:
    'pf-m-hidden pf-m-visible-on-sm pf-u-w-25-on-xl pf-u-w-25-on-lg pf-u-w-25-on-md pf-u-w-16-on-sm',
  added: 'pf-m-hidden pf-m-visible-on-md pf-u-w-25-on-xl pf-u-w-16-on-lg pf-u-w-16-on-md',
  kebab: 'dropdown-kebab-pf pf-c-table__action',
};

export const userHeaders: React.ComponentProps<typeof Table>['Header'] = () => [
  {
    title: 'Name',
    props: { className: userTableColumnClasses.name },
  },
  {
    title: 'Role',
    props: { className: userTableColumnClasses.role },
  },
  {
    title: 'Email',
    props: { className: userTableColumnClasses.email },
  },
  {
    title: 'Added',
    props: { className: userTableColumnClasses.added },
  },
  {
    title: '',
    props: { className: userTableColumnClasses.kebab },
  },
];
