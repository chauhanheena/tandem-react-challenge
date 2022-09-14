import React, { useCallback, useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import useFormStyles from './styles';

interface IFormProps {
  onReload: () => void;
  onSubmit: (value: number) => void;
}


export default function Form(props: IFormProps) {
  const { onSubmit, onReload } = props;
  const [input, setInput] = useState<string>('');
  const [inProgress, setInProgress] = useState<boolean>(false);
  const classes = useFormStyles();

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setInput(e.target.value),
    [],
  );

  const onClick = () => {
    setInProgress(true);
   onSubmit(parseInt(input));
    /**
     * Empty input
     */
    setInput('');
    setInProgress(false);
  };

  return (
    <Grid container>
      <Grid item>
        <TextField
          className={classes.formGroupItem}
          type="number"
          size="small"
          label="Add Number"
          color="primary"
          value={input}
          onChange={onChange}
        />
        <Button
          className={classes.formGroupItem}
          size="large"
          variant="contained"
          onClick={onClick}
          color="primary"
          disabled={!input}
        >
          Add
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={classes.refreshButton}
          size="large"
          disabled={inProgress}
          variant="outlined"
          color="primary"
          onClick={onReload}
        >
          Refresh
        </Button>
      </Grid>
    </Grid>
  );
}
