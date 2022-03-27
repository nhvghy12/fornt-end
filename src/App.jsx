import logo from './logo.svg';
import './App.css';
import {NavBarComponent} from './components/NavBarComponent'
import { Row, Col, Layout ,Image } from 'antd';
import {HeaderComponent} from './components/HeaderComponent'
import {UserPage} from './pages/UserPage'
import { CreateUserPage } from './pages/CreateUserPage';
import {ChangePasswordModal} from './components/ChangePasswordModal'


function App() {


  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
     <Row gutter={16}>
            <Col xs={24} sm={24} md={6} lg={6} xl={5} xxl={4}>
              <img 

              sx={{float: 'left'}}
              disabled 
              width={130}
              src="https://assets-global.website-files.com/5da4969031ca1b26ebe008f7/602e42d8ec61635cd4859b25_Nash_Tech_Primary_Pos_sRGB.png" ></img>
              <NavBarComponent></NavBarComponent>
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={19} xxl={20}>
              <div style={{marginTop:"120px"}}></div>
               {/* <UserPage ></UserPage>
               <ChangePasswordModal></ChangePasswordModal> */}
               <CreateUserPage></CreateUserPage>
            </Col>

     </Row>
    </div>
  );
}

export default App;
