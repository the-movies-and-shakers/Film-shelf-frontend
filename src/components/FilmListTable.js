import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
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
              style={styles.table}
              borderColor={'goldenrod'}>
              <TableHeaderColumn isKey dataField='filmId' className='tr-head' hidden>Film ID</TableHeaderColumn>
              <TableHeaderColumn width={'60%'} dataField='filmTitle' className='tr-head'>Title</TableHeaderColumn>
              <TableHeaderColumn width={'20%'} dataField='rating' className='tr-head'>Rating</TableHeaderColumn>
              <TableHeaderColumn width={'20%'} dataField='genre' className='tr-head'>Genre</TableHeaderColumn>
            </BootstrapTable>
          </div>
        );
  }
}

const styles = {
  table: {
    color: "goldenrod",
    backgroundColor: "#01162700",
    borderColor: "goldenrod",
    fontFamily: "Montserrat",
    paddingLeft: "20%",
    paddingRight: "20%"
    }
}

export default FilmListTable;