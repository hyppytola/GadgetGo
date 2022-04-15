import Typography from '@material-ui/core/Typography';
import React from 'react';
import Box from '@material-ui/core/Box';

const Footer = () => (
  <Box mt={5} mb={5}>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Made by "Go Team"'}
    </Typography>
  </Box>
);

export default Footer;