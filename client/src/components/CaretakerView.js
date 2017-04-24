import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';


// import SvgIcon from 'react-icons-kit';

// import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
// import { ic_business } from 'react-icons-kit/md/ic_business';


//specify the base color/background of the parent container if needed 
const MySideNav = () => (
    <div style={{background: '#2c3e50 ', color: '#FFF', width: 220}}>
        <SideNav highlightColor='#E91E63 ' highlightBgColor='#00bcd4 ' defaultSelected='sales'>      
            <Nav id='dashboard'>
                {/* <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    */}
                <NavText> Dashboard </NavText>
            </Nav>
            <Nav id='sales1'>
                 {/*<NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon> */}
                <NavText> Sales1 </NavText>
            </Nav>
            <Nav id='sales2'>
                 {/*<NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon> */}
                <NavText> Sales2 </NavText>
            </Nav>
        </SideNav>

    </div>
)

class CaretakerView extends Component {
    
 render() {

   return (
      <div className="App">
        <div className="jumbotron">
          
            <h2>Caretaker Details</h2>
          
        </div>
        <div className="row">
          {MySideNav()}
          <div className="dashboard-body">
          </div>
          </div>
      </div>
    );
  }
}
export default CaretakerView;