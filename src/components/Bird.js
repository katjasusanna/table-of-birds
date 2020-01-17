import React from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import BirdData from '../data/bird.json';
import './Bird.css';

const Bird = () => {

    const data = BirdData.map(bird => {
        return (bird)
    })


      const columns = [{
        headerStyle: {background:'lightgrey', textAlign: 'left', fontWeight: 'bold'},
        Header: 'Finnish',
        accessor: 'finnish', 
        className: 'left',
        filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) 
      }, {
        headerStyle: {background:'lightgrey', textAlign: 'left', fontWeight: 'bold'},
        Header: 'Swedish',
        accessor: 'swedish',
        className: 'left',
        filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) 
      },   
      
      {
        headerStyle: {background:'lightgrey', textAlign: 'left', fontWeight: 'bold'},
        Header: 'English',
        accessor: 'english',
        className: 'left',
        filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value)  
    },
    {
        headerStyle: {background:'lightgrey', textAlign: 'left', fontWeight: 'bold'},
        Header: 'Short',
        accessor: 'short',
        className: 'left',
        filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value)  
    },
    {
        headerStyle: {background:'lightgrey', textAlign: 'left', fontWeight: 'bold'},
        Header: 'Latin',
        accessor: 'latin',
        className: 'left',
        filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value)  
    },
      
 ]

    return (
        <ReactTable 
            data={data} 
            columns={columns}
            filterable 
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id]) === filter.value}
        />
    )

}

export default Bird;