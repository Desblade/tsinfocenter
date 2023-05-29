import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { MARKET_ROUTE } from '../../utils/consts';
import styles from './index.module.scss';

const ErrorPage = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.container__content}>
        <Typography variant={'h3'}>Вы перешли по неправильной ссылке</Typography>
        <Link variant={'h5'} href={MARKET_ROUTE} underline={'hover'}>Вернуться на главную</Link>
      </Box>
    </Box>
  );
};

export {
  ErrorPage,
};
