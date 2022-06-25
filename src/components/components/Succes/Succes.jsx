import  React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tick1  from '../Tick/Tick'



const style = {
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '49.5%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:'20px',
  backgroundColor: '#16161e0',
  boxShadow: 24,
  p: 4,
  borderColor:'1px solid red',
};

export default function BasicModal({open3,setOpen3}) {
  const handleClose = () => setOpen3(false);
 

  return (
    <div>
      <Modal
        open={open3}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Tick1/>
        <h1  style={{color:'green'}}>Success</h1>
        </Box>
      </Modal>
    </div>
  );
}