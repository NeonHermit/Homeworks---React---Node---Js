import React from 'react';

export class Movies extends React.Component{
    render(){
        return(
            <div id="movies">
                <table border = "1" cellPadding = "20">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th width = "120">Genre</th>
                            <th width = "120">Year</th>
                            <th>Poster</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.filmoj.map((film, i) =>{
                            return(
                                <tr key={i}>
                                    <td align = "center"> 
                                        {film.name}
                                    </td>
                                    <td align = "center">
                                        {film.genre}
                                    </td>
                                    <td align = "center">
                                        {film.year}
                                    </td>
                                    <td>
                                        {film.poster}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
