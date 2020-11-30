import React from 'react';
import Meaning from './Meaning';
import Example from "./Example";

class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showExamples: [],
            showMeanings: []
        };
    }

    showExamples=(cursor)=>{
        var { showExamples } =this.state;
        showExamples[cursor] = true;
        this.setState({showExamples: showExamples});
    }

    showMeanings=(cursor)=>{
        var { showMeanings } =this.state;
        showMeanings[cursor] = true;
        this.setState({showMeanings: showMeanings});
    }

    runTimers =() =>{
        const {cursor} = this.props;
        setTimeout(() => this.showMeanings(cursor), 3000);
        setTimeout(() => this.showExamples(cursor), 6000);
    }
    
    componentDidMount() {
        this.runTimers();
    }

    componentDidUpdate() {
        this.runTimers();
    }


    render() {
        const{entry, cursor} = this.props;

        return (
            <div>
                <div>{entry.name}</div><br />
                <div>{entry.origin}</div>
                <br />
                {(entry.examples && this.state.showExamples[cursor]) ?
                  entry.examples.map(e=>
                    <Example example={e} />)
                : 
                ''}
                <br />
                {(entry.meanings && this.state.showMeanings[cursor]) ?
                 entry.meanings.map(m=>
                    <Meaning definition={m} />)
                : 
                ''}
            </div>
        );
    }
}

export default Entry;