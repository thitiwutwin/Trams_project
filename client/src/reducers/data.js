export default (data = [], action) => {

    switch(action.type){
        case 'FETCH_ALL':
            return data;
        case 'UPDATE':
            return data;
        default:
            return data;
    }

}