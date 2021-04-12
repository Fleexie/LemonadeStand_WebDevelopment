import React from 'react'


export default class About extends React.Component {
    componentDidMount(){
        document.title = 'Lemonade Stand - About'
    }

    render(){
        return(
            <div className="container">
            <h2>About Us</h2>
            <p>Established in 2021, we create the the most refreshing and delicious lemonade</p>
            <h3>Always fresh from the tap</h3>
            <img src="https://1b-f.s3.eu-west-1.amazonaws.com/a/35959-E6F26A05-1795-46BF-B306-12CFAFDA57D0-0-1582819055.gif"></img>
        </div>
        )
    }

    
}