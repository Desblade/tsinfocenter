import React, { useState } from 'react';
import { Modal, Box, Card, Typography, TextField, CardContent, Button } from '@mui/material';
import styles from './index.module.scss';

const ModalForAddFood = ({ show, handleCloseModal, handleAddFood }) => {
  const [title, setTitle] = useState('');
  const [cost, setCost] = useState('');

  return (
    <Modal
      open={show}
      onClose={handleCloseModal}
      className={styles.modal}
    >
      <Card className={styles.card}>
        <Box className={styles.box}>
          <Typography variant={'h5'}>
            Время добавить чебуреков!
          </Typography>
          <CardContent className={styles.cardContent}>
            <TextField
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder={'Введите название товара'}
              fullWidth
              label={'Название товара'}
            />
            <TextField
              value={cost}
              onChange={(event) => setCost(event.target.value)}
              placeholder={'Введите цену товара'}
              fullWidth
              type={'number'}
              label={'Цена товара ($)'}
            />
            <Button onClick={() => handleAddFood(title, cost)}>
              Добавить
            </Button>
          </CardContent>
        </Box>
      </Card>
    </Modal>
  );
};

export {
  ModalForAddFood,
};
