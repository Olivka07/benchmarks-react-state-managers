import React from 'react';
import {Layout, Row} from 'antd'
import './index.scss'
import LeftMenu from './components/LeftMenu/LeftMenu';
import TableUsers from './components/TableUsers/TableUsers';
import {useStore} from 'effector-react'
import { $theme } from './stores/ThemeStore';


function App<FC>() {
  const theme = useStore($theme)

  // useEffect(() => {
  //   localStorage.setItem('users', )
  // }, [])

  return (
    <Layout className={theme==='dark' ? 'container_dark': 'container_light'}>
      <Layout.Content style={{ height: '100%', padding: "30px"}}>
        <Row  justify={'center'} align={'top'} style={{ position: 'relative', height: '100%'}}>
            <LeftMenu/>
            <TableUsers/>
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export default App;
