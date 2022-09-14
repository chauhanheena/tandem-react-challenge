import { Card, CardContent, Typography } from '@mui/material';

/**
 * Custom CardProps
 */
interface ICustomCardProps {
  name: string;
  value: string;
  classes: string
}

/**
 * Component for display cards
 */
export default function CustomCard(props: ICustomCardProps) {
  const { name, value, classes } = props;
  return (
    <Card  className={classes} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="div">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
