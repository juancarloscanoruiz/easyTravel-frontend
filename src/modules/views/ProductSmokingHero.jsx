import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

function ProductSmokingHero() {
  return (
    <Container component="section" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}>
      <Typography sx={{ border: '5px solid', borderRadius: 0, height: 'auto', py: 2, px: 6, color: 'black'}}>
      <Typography variant="h4" component="span">Got Any Questions?</Typography>
      </Typography>
      <Typography sx={{ my: 3 }}>Get in touch!</Typography>
      <SupportAgentRoundedIcon sx={{ width:"50px", height: 'auto'}}/>
    </Container>
    
  );
}
export default ProductSmokingHero;