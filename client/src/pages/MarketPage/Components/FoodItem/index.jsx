import React from 'react';
import { observer } from 'mobx-react-lite';
import { Card, CardContent, CardHeader, CardMedia, Typography, Box, CardActions, Button } from '@mui/material';
import { IMG_URL } from '../../../../utils/consts';
import styles from './index.module.scss';

const FoodItem = observer(({ id, title, cost }) => {
  return (
    <Card className={styles.card}>
      <CardMedia
        component={'img'}
        image={IMG_URL}
      />
      <CardContent className={styles.cardContent}>
        <Typography variant={'h5'}>
          { title }
        </Typography>
        <Box className={styles.box}>
          <Typography variant={'h5'}>
            Цена:
          </Typography>
          <Typography variant={'h5'} sx={{color: 'green'}}>
            ${ cost }
          </Typography>
        </Box>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Button>
          Купить
        </Button>
      </CardActions>
    </Card>
  );
})

export {
  FoodItem,
};
