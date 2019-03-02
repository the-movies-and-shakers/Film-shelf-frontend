import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../App.css';

class FilmListTable extends React.Component {
  
  constructor(props) {
    super(props);

    this.onDeleteRow = this.onDeleteRow.bind(this);
  }   
   
  onDeleteRow(rowKeys) {
    
    this.props.onDeleteHandler(rowKeys)
  }

    render() {

      const options = {
        afterDeleteRow: this.onDeleteRow
      }
  
      const selectRowProp = {
        mode: 'checkbox'
      }

        return (
          <div style={styles.table}>
            <BootstrapTable 
              data={this.props.data} 
              deleteRow={true}
              selectRow={selectRowProp}
              options={options}
              trClassName='tr-style'
              >
              <TableHeaderColumn isKey dataField='filmTitle' className='tr-head'>
                Title
              </TableHeaderColumn>
              <TableHeaderColumn dataField='rating' className='tr-head'>
                Rating
              </TableHeaderColumn>
              <TableHeaderColumn dataField='genre' className='tr-head'>
                Genre
              </TableHeaderColumn>
            </BootstrapTable>
          </div>
        );
      }
    }

    const styles = {
      table: {
          color: "goldenrod",
          backgroundColor: "#011627",
          borderColor: "goldenrod",
          fontFamily: "Shrikhand",
          paddingLeft: "10%",
          paddingRight: "10%",
      }
    }

export default FilmListTable;