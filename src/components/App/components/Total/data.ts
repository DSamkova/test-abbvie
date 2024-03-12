export interface ITotal {
    id: string,
    title: string,
    change: number,
    total: string,
    color: string,
}

export const TotalSections: ITotal[] = [{
    id: '1',
    title: 'Total Active Users',
    change: 2.6,
    total: '18,765',
    color: '#26B67A',
}, {
    id: '2',
    title: 'Total Installed',
    change: 0.2,
    total: '4,876',
    color: '#2CC9E0',
}, {
    id: '3',
    title: 'Total Downloads',
    change: -0.1,
    total: '18,765',
    color: '#FFB72C',
}]

export const defaultData = [
    ['year', 'result'],
    ['2000', 2.3],
    ['2001', 3.1],
    ['2002', 4.0],
    ['2003', 10.1],
    ['2004', 4.0],
    ['2005', 3.6],
    ['2006', 3.2],
    ['2007', 2.3],
    ['2008', 1.4],
    ['2009', 0.8],
    ['2010', 0.5],
    ['2011', 0.2],
];