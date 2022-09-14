import React, { FC } from 'react'
import { Grid } from '@mui/material'
import CustomCard, {ICustomCardProps} from '../CustomCard';

interface IDataSetProps {
    dataSet: Array<ICustomCardProps>;
}

const DataSet: FC<IDataSetProps> = (props) => {
    const { dataSet } = props;
    return (
        <Grid container spacing={4} wrap={'nowrap'}>
            {dataSet.map(data => (
                <Grid item key={data.name} >
                    <CustomCard name={data.name} value={data.value} />
                </Grid>))}
        </Grid>
    )
}

export default DataSet