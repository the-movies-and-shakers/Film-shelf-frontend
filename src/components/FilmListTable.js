import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class FilmListTable extends React.Component {

    render() {
        return (
          <div style={styles.table}>
            <BootstrapTable data={this.props.data} style={styles.row}>
              <TableHeaderColumn isKey dataField='filmTitle'>
                Title
              </TableHeaderColumn>
              <TableHeaderColumn dataField='rating'>
                Rating
              </TableHeaderColumn>
              <TableHeaderColumn dataField='genre'>
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
      },
    }

export default FilmListTable;