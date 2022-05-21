import * as React from 'react';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import { Avatar, Container } from '@mui/material';

function Profile() {
  

  return (
    <React.Fragment>
       <AppAppBar />
       <Container fixed>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
       </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Profile);