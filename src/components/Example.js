import React from 'react';

class Example extends React.Component{
    render() {
        const{example} =this.props;
        return(
            <div>
                <div>{example}</div>
            </div>
        );
    }
}

export default Example;