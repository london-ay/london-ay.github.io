import React from "react";
import ArchiveBeer from "./ArchiveBeer";


class Recipes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            beers:[
                // Beer data from the API goes here
            ]
        }
    }
    componentDidMount(){
        const url = "https://api.punkapi.com/v2/beers";
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({beers: data}))
        
        
    }
    render(){
        return(
            <div>
                <h1 className="beers-archive-title">
                    Recipes
                </h1>
                <ul className="beers-archive">
                    {this.state.beers.map(beer => <ArchiveBeer name={beer.name} tagline={beer.tagline} imgUrl={beer.image_url} abv={beer.abv}/>)}
                </ul>
            </div>
        )
    }

}

export default Recipes