import { makeStyles } from '@mui/styles';

const useFormStyles = makeStyles({
  formGroupItem: {
    margin: 16,
  },
  refreshButton: {
    '&.MuiButtonBase-root': {
      marginLeft: 15,
    },
  },
});

export default useFormStyles;
