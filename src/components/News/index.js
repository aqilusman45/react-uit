import React from 'react';
import { Route } from "react-router-dom";
import { NewsList } from '../News_List';
import { NewsView } from '../News_View';
// export const Topics = ()=>{
//     return(
//         <div>
//             <h1>Topics</h1>
//         </div>
//     )
// }

const INITIAL_STATE = {
    newList: [],
    isLoading: true,
}

class News extends React.Component {

    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE };
    }

    componentDidMount() {
        if (this.props.match.url === '/news/') {
            this.props.history.push('/news')
        }
        fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=919d67131204486a9e1e77b3e86bee78")
            .then((response) => {
                return response.json();
            })
            .then((res) => {
                const newList = res.articles.map((item, i) => {
                    return item
                })
                this.setState({
                    newList,
                    isLoading: false,
                })
            })
            .catch((rej) => {
                console.log(rej);
            })
    }

    handleClick = (event) => {
        console.log(event);
        // const param = event;
        const newUrl = this.state.newList[event].source.name
        this.props.history.push(`${this.props.match.url}/${newUrl}`, this.state.newList[event]);
    }

    render() {
        return (
                <div className="news">
                    <NewsList isLoading={this.state.isLoading} headLines={this.state.newList} onClick={this.handleClick} />

                    <Route exact path={this.props.match.path} render={() => <h3>Select Headline.</h3>}/>
                    <Route path={`${this.props.match.path}/:id`} component={NewsView} />
                </div>
                )
            }
        }
        
        
export {News};