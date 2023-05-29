import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Typography } from '@mui/material';
import { Context } from '../../index';
import { FoodList } from './Components/FoodList';
import styles from './index.module.scss';

const MarketPage = observer(() => {
  const { foodStore } = useContext(Context);

  useEffect(() => {
    foodStore.getFoodFromAPI()
  }, []);

  return (
    <Box className={styles.container}>
      {
        foodStore.food.length
          ? <FoodList />
          : <Typography>Товары не были добавлены</Typography>
      }
    </Box>
  );
})

export {
  MarketPage,
};
