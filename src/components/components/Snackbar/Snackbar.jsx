import  React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tick1  from '../Tick/Tick'



const style = {

  lineHeight:'40px',
  border:'1px solid red',
  backgroundColor: 'rgba(22, 22, 30, 1) ',
  textAlign: 'center',
  fontSize:'15px',
  position: 'absolute',
  top: '50%',
  left: '49.5%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:150,
  borderRadius:'15px',
  // bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,

};

export default function BasicModal({open2,setOpen2}) {
  const handleClose = () => setOpen2(false);
 

  return (
    <div>

      <Modal
        open={open2}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h1 style={{color:'red', }}>Malumotlardi to'liq kiriting !</h1>
        </Box>
      </Modal>
    </div>
  );
}