import entries from './entries';

let server = {
    fetchEntries : () => {
        // later on we will connect to a backend and fetch all
        return entries;
    }
};

export default server;