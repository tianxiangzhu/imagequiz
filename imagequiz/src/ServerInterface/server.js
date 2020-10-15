import entries from './entries';
let getEntries = () => {
    // later on we will connect to a backend and fetch all
    return entries;
}

let server = {
    fetchEntries : getEntries
};

export default server;