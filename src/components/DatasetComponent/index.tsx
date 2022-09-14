import React, { FC } from 'react'

import CustomCard from '../CustomCard';
import classNames from 'classnames';
import DataSets from '../../interfaces/DataSets';
import { Grid } from '@mui/material';

import useCustomCardStyles from './styles';

/**
 * Datasets contains mean, median, mode
 */
interface IDataSetProps {
    dataSet: DataSets;
}


const DataSet: FC<IDataSetProps> = (props) => {
    const { dataSet } = props;
    const classes = useCustomCardStyles();
    return (
        <Grid container spacing={4} wrap={'nowrap'}>
                <Grid item>
                    <CustomCard classes={ classNames(classes.card, classes.borderOrange)} name={'Mean'} value={dataSet.mean} />
                </Grid>
                
                <Grid item>
                    <CustomCard classes={classNames(classes.card, classes.borderGray)} name={'Median'} value={dataSet.median} />
                </Grid>
                
                <Grid item>
                    <CustomCard classes={classNames(classes.card, classes.borderGreen)} name={'Mode'} value={dataSet.mode} />
                </Grid>
        </Grid>
    )
}

export default DataSet
