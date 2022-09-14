import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

export interface ICustomCardProps {
  name: string;
  value: string;
}

export default function CustomCard(props: ICustomCardProps) {
  const { name, value } = props;
  return (
    <Card>
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
