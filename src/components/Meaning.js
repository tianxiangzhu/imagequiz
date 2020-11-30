import React from 'react';

class Meaning extends React.Component{
    render() {
        const{definition} =this.props;
        return(
            <div>
                <div>{definition.type}</div><br />
                <div>{definition.meaning}</div>
            </div>
        );
    }
}
export default Meaning;