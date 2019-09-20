import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CSS = makeStyles(theme => ({
  root: {
    width: '100%',
    // marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(Format, Availability) {
  return { Format, Availability};
}

const rows = [
  createData('Hard Cover', 'Online'),
  createData('Paperback', 'In Store'),
];

export default function BookTable() {
  const styling = CSS();

  return (
    <Paper className={styling.root}>
      <Table className={styling.table}>
        <TableHead>
          <TableRow>
            <TableCell>Format</TableCell>
            <TableCell align="right">Availability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.Format}
              </TableCell>
              <TableCell align="right">{row.Availability}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}