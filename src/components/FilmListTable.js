import React from 'react';

import filmTitle from './FilmTitleInputBox'

class FilmListTable extends React.Component {
    render() {
        return (
            <div>
                {this.props.tasks.map((filmTitle, i) => 
                        <filmTitle taskDescription={task.Description} 
                              onFilmDeleteHandler={this.props.onFilmDelete} 
                              onFilmEditHandler={this.props.onFilmEditHandler} 
                               />
                    )
                }
            </div>
        );
    }
}


const styles = {
    
};

export default FilmListTable;