import { makeStyles } from '@mui/styles';

const useCustomCardStyles = makeStyles({
  borderOrange: {
    '&.MuiPaper-root': {
      borderColor: '#FFA500',
    },
  },
  borderGreen: {
    '&.MuiPaper-root': {
      borderColor: '#00ff00',
    },
  },
  borderGray: {
    '&.MuiPaper-root': {
      borderColor: '#6f6f6f',
    },
  },
  card: {
    borderBottom: '2px solid',
  },
});

export default useCustomCardStyles;
