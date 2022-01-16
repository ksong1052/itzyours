import React from 'react';
import './checkOutItem.scss';

// Material UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.action';

const CheckOutItem = ({ cartItems, cartPriceTotal, clearItem }) => {
  // function priceRow(qty, unit) {
  //   return qty * unit;
  // }

  // function createRow(desc, qty, unit) {
  //   const price = priceRow(qty, unit);
  //   return { desc, qty, unit, price };
  // }

  // function subtotal(items) {
  //   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  // }

  // const rows = [
  //   createRow('Paperclips (Box)', 100, 1.15),
  //   createRow('Paper (Case)', 10, 45.99),
  //   createRow('Waste Basket', 2, 17.99),
  // ];

  const TAX_RATE = 0.13;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  const invoiceSubtotal = cartPriceTotal;
  const invoiceTaxes = TAX_RATE * cartPriceTotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <div className='checkOutItem'>    
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">

          <TableHead>  
            <TableRow>
              <TableCell className='checkOutHeader' align="center">Product</TableCell>
              <TableCell align="center" className='checkOutHeader'>Name</TableCell> 
              <TableCell align="center" className='checkOutHeader'>Quantity</TableCell>
              <TableCell align="center" className='checkOutHeader'>Price</TableCell>
              <TableCell align="right" className='checkOutHeader' style={{paddingRight:'25px'}}>Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center">
                  <img src={item.imageUrl} alt="item" className='itemImage'/>                  
                </TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">

                  {item.quantity}

                </TableCell>
                <TableCell align="center">{item.price}</TableCell>
                <TableCell align="right">
                  <Button 
                    size="large" 
                    color="success" 
                    startIcon={<DeleteIcon />} 
                    style={{paddingLeft:'35px'}} 
                    onClick={() => clearItem(item)}
                  />
                </TableCell>
              </TableRow>
            ))}

            <TableRow> 
              <TableCell rowSpan={3} />
              <TableCell style={{borderBottom:'none'}}></TableCell>
              <TableCell colSpan={2} className='checkOutTitle'>Subtotal</TableCell>
              <TableCell align="right" className='checkOutTotal'>${invoiceSubtotal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{borderBottom:'none'}}></TableCell>
              <TableCell className='checkOutTitle'>Tax</TableCell>
              <TableCell align="center" className='checkOutTotal'>{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
              <TableCell align="right" className='checkOutTotal'>${ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{borderBottom:'none'}}></TableCell>
              <TableCell colSpan={2} className='checkOutTitle'>Total</TableCell>
              <TableCell align="right" className='checkOutTotal'>${invoiceTotal}</TableCell>
            </TableRow>
          </TableBody>

        </Table>
      </TableContainer>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckOutItem);