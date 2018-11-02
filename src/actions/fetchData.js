
export const fetchData = (date) => dispatch =>{
    let curr_date = "" + date.getDate(),
        curr_month = "" + (date.getMonth() + 1),
        curr_year = "" + date.getFullYear();
    console.log(typeof(curr_date));
    if(curr_date.length<2) {curr_date = '0' + curr_date;}
    if(curr_month.length<2) {curr_month = '0' + curr_month;}
    console.log(curr_year + "-" + curr_month + "-" + curr_date);
    fetch(`https://api.tvmaze.com/schedule?country=US&date=${curr_year + "-" + curr_month + "-" + curr_date}`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            dispatch({type: 'FETCH_DATA_SUCCESS', payload: response});
        })
        .catch( console.log );
};