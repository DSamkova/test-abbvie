import React from 'react';
import {useChartOptions} from '../../../../hooks/useChartOptions';
import {pieData} from './data';
import Chart from 'react-apexcharts';
import Paper from '../../../Paper';
import {Typography} from '@mui/material';

const DownLoads: React.FC = () => {
    const chartOptions = useChartOptions({labels: pieData.labels});
    return (
        <Paper sx={{flexDirection: 'column', flex: 1, alignItems: 'flex-start'}}>
            <Typography variant='h6' mb='40px'>Current Download</Typography>
            <Chart height={300} options={chartOptions} series={pieData.chartSeries} type='donut' width='100%'/>
        </Paper>
    );
}

export default DownLoads;
