// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { Avatar, CardHeader } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const rows = [
 
  {
    age: 33,
    date: '08/25/2017',
    salary: '$10909.52',
    name: 'Adeline Day',
    status: 'professional',
    email: 'hnisius4@gnu.org',
    designation: 'Senior Cost Accountant'
  },
  {
    age: 61,
    status: 'current',
    date: '06/01/2017',
    salary: '$17803.80',
    name: 'Lora Jackson',
    designation: 'Geologist',
    email: 'ghoneywood5@narod.ru'
  },
  {
    age: 22,
    date: '12/03/2017',
    salary: '$12336.17',
    name: 'Rodney Sharp',
    status: 'professional',
    designation: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp'
  }
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const CustomersTable = () => {
  const navigate=useNavigate();
  return (
    <Card>
      <CardHeader
          title='New Customers'
          sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography onClick={()=>navigate("/admin/customers")} variant='caption' sx={{color:"blue",cursor:"pointer",paddingRight:".8rem"}}>View All</Typography>}
          titleTypographyProps={{
            variant: 'h5',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
      <TableContainer>
        <Table sx={{ minWidth: 390 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
            <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(0,5).map(item => (
              <TableRow hover key={item.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell> <Avatar alt={item.name} src={item.image} /> </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                
                
               
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default CustomersTable
