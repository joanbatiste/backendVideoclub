
class Storage {
    state = [];

    constructor(){

    };

    async set(film){
        console.log("que viene la movie", film);
        return this.state.push(film);
    };



};
module.exports = Storage;
