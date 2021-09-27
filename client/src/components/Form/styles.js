import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  timestampsContainer: {
    width: '100%'
  },
  timestampsContainerHide: {
    width: '100%',
    display: 'none'
  },
  popup: {  
    position: 'fixed',
    width: '100%',
    height: '100%',  
    top: '0',  
    left: '0',  
    right: '0',  
    bottom: '0',  
    margin: 'auto',  
    backgroundColor: 'rgba(0,0,0, 0.5)',  
  },  
  popup_open: {  
    position: 'absolute',  
    left: '25%',  
    right: '25%',  
    top: '25%',  
    bottom: '25%',  
    margin: 'auto',  
    borderRadius: '20px',  
    background: 'white'  
  }
}));