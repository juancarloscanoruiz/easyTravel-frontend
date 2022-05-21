//AQUI SE VAN A MOSTAR LOS TIPS DE VIAJES

import * as React from 'react';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';

function TipsViajeros() {
  

  return (
    <React.Fragment>
      <AppAppBar />
      
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(TipsViajeros);