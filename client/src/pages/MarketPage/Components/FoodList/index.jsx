import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../../index';
import { Box } from '@mui/material';
import { FoodItem } from '../FoodItem';
import styles from './index.module.scss';

const FoodList = observer(() => {
  const { foodStore } = useContext(Context);
  
  return (
    <Box className={styles.container}>
      {
        foodStore.food.map(({ id, title, cost }) => {
          return <FoodItem key={id} id={id} title={title} cost={cost} />
        })
      }
    </Box>
  );
})

export {
  FoodList,
};
