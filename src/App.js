import { Col, Layout, Row } from 'antd';
import 'antd/dist/reset.css';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import Avatar from 'react-avatar';
import './App.css';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="App">
     <Layout>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Row style={{margin:"1rem"}}><Col span={10}><Avatar size="60" round={true} name={"S"} maxInitials={1}/></Col>
              <Col span={14} style={{marginTop:"1.5rem"}}>User</Col>
              </Row>
              
              <div style={{padding:"1rem",fontSize:"20px",textAlign:"left"}}>#Introductions</div>     
            </Sider>

            <Layout>
              <Content
                className="site-layout-background"
                style={{
                  margin: 0,
                  minHeight: 280,
                  backgroundColor:"#f8fbfe"
                }}
              >
               <Chat/>
              </Content>
            </Layout>
          </Layout>
        </Layout> 
    </div>
  );
}

export default App;
