import React, { useContext, useState } from 'react';
import { AppBar, Box, Button, Toolbar, Typography, MenuItem, Menu, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { toast, ToastContainer } from 'react-toastify';
import { Context } from '../../index';
import { LOGIN_ROUTE } from '../../utils/consts';
import { ModalForAddFood } from './Components/ModalForAddFood';
import 'react-toastify/dist/ReactToastify.css';
import styles from './index.module.scss';

const Header = observer(() => {
  const { userStore, foodStore } = useContext(Context);
  const navigate = useNavigate();
  const role = userStore?.user.role;

  const [anchorEl, setAnchorEl] = useState(null);
  const [show, setShow] = useState(false);

  const handleOpenModal = () => setShow(true);
  const handleCloseModal = () => setShow(false);

  const handleAddFood = async (title, cost) => {
    try {
      await foodStore.addFoodFromAPI({
        title,
        cost: parseInt(cost),
      });

      setShow(false);
    } catch (e) {
      return toast(e.error);
    }
  }

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShow(true);
  };

  return (
    <Box>
      <AppBar position={'fixed'}>
        <Toolbar className={styles.xc}>
          <Typography>
            Магазин чебуреков
          </Typography>
          <Box>
            {
              role === 'admin' &&
              <Button onClick={handleClick} color={'inherit'}>Панель управления</Button>
            }
            {
              userStore.isAuth
                ? <Button onClick={() => userStore.logout()} color={'inherit'}>Выйти</Button>
                : <Button onClick={() => navigate(LOGIN_ROUTE)} color={'inherit'}>Войти</Button>
            }
          </Box>
          <Menu
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Добавить товар</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <ModalForAddFood
        show={show}
        handleCloseModal={handleCloseModal}
        handleAddFood={handleAddFood}
      />
      <ToastContainer />
    </Box>
  );
})

export {
  Header,
};
