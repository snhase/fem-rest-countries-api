export const getCountriesData = async (requestUrl, setData) => {
    try {
        const data = await getRequest(requestUrl);

        if(data) {
            let sortedData = data.sort((a,b)=>{
                if(a.name && b.name){
                    return a.name.common.localeCompare(b.name.common);
                }
                return null;
            })
            setData(sortedData);
        }
    } catch (error) {
        console.error('Error', error);
        if(error.message === '404'){
            setData(null);
        }
    }
}

export const getCountryDetails = async (requestUrl, setCountryDetails, callback) => {
    try {
        const data = await getRequest(requestUrl);

        if(data) {
            setCountryDetails(data[0]);
            callback(data[0]);
        }
    } catch (error) {
        console.error('Error', error);
    }
}

export const getBorderCountryDetails = async (requestUrl, setBorderCountryDetails, callback) => {
    try {
        const data = await getRequest(requestUrl);

        if(data) {
            setBorderCountryDetails(data);
            callback();
        }
    } catch (error) {
        console.error('Error', error);
    }
}


const getRequest = async (requestUrl) => {
    const response = await fetch(requestUrl ,{
        method: 'GET'
    });

    if(!response.ok) {
        if(response.status === 404){
            throw new Error ('404');
        }
        else{
            throw new Error ('Network response not ok');
        }
    }
    
    const data = await response.json();

    return data;
}
