import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class FilmListTable extends React.Component {

    render() {
        return (
          <div>
            <BootstrapTable data={this.props.filmList}>
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

const styles = {
    
};

export default FilmListTable;