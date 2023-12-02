export const getAllCountriesData = async (requestUrl, setData) => {
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
    try {
        const response = await fetch(requestUrl ,{
            method: 'GET'
        });

        if(!response.ok) {
            throw new Error ('Network response not ok');
        }
        
        const data = await response.json();

        return data;

    } catch (error) {
        console.error('Error', error);
    }
}
