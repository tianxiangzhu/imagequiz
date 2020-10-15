import React from 'react';

class Entry extends React.Component {
    
    render() {
        const {entry} = this.props
        return (
            <div>
                <div>{entry.name}</div>
                <div>{entry.orgin}</div>
            </div>
        );
    }
}

export default Entry;