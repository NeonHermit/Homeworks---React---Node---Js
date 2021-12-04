import React from 'react';
import axios from 'axios';

export class Albums extends React.Component{

    constructor(props){
        super(props)

        this.state={
            albums: undefined
        }
    }

    getAlbums = () => {
        axios({
            url : 'https://jsonplaceholder.typicode.com/albums',
            method: 'GET'
        })
        .then(res => {
            this.setState({
                albums: res.data
            })
        })
        .catch(err => {
            alert(err)
        })
    }

    componentDidMount(){
        this.getAlbums();
    }

    render(){
        return(
            <div id="albums">
                {this.state.albums && this.state.albums.length > 0?
                    <table border="1">
                        <thead>
                            <tr>
                                <th>
                                    Id
                                </th>
                                <th>
                                    Title
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.albums.map((album, i) => {
                                return(
                                    <tr key={album.userId}>
                                        <td>
                                            {album.id}
                                        </td>
                                        <td>
                                            {album.title}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    :<h2>Nema</h2>
                }
            </div>
        )
    }
}