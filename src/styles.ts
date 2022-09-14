import { makeStyles } from '@mui/styles';

const useAppStyles = makeStyles({
  root: {
    'width': '100%',
    'maxWidth': '450px',
    'margin': '0 auto',
    '& > *': {
      marginTop: 16,
      marginBottom: 16,
    },
  },
  redText: {
    color: '#ff0000',
  },
  appTitle: {
    color: '#1976d2',
    marginBottom: 10,
  },
});

export default useAppStyles;
