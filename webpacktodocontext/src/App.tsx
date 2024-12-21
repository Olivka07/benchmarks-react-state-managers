import {Layout, Row} from 'antd'
import { useAppContext } from './context/AppContext';
import './index.scss'
import LeftMenu from './components/LeftMenu/LeftMenu';
import TableUsers from './components/TableUsers/TableUsers';
import ModalProvider from './context/ModalContext';

function App<FC>() {

  const {theme} = useAppContext()

  return (
    <Layout className={theme==='dark' ? 'container_dark': 'container_light'}>
      <Layout.Content style={{ height: '100%', padding: "30px"}}>
        <Row  justify={'center'} align={'top'} style={{ position: 'relative', height: '100%'}}>
            <LeftMenu/>
            <ModalProvider>
              <TableUsers/>
            </ModalProvider>
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export default App;
