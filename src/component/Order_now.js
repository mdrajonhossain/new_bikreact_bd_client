import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Table from 'react-bootstrap/Table';



const Order_now = (props) => {




  return (
    <div className="Order_now">
      <div className='header'>
        <div style={{ padding: '15px', color: 'white', fontSize: '18px' }}>Order Now</div>
        <div className='close' onClick={() => props.setOrdershow(false)}>&#10006;</div>
      </div>

      <div className='order_body'>
        <div className='container'>
          <div className='row'>
            
            <div className='col-md-6'></div>
            
            <div className='col-md-6'>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Order_now;
