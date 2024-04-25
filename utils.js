export const fetchDiet = async(stage,time) =>{
    const apiUri = `http://localhost:4000/diet/${stage}/${time}`;
    const response = await fetch(apiUri,{
        method:"GET",
        header:{
            "Content-Type":"application/json",
        },
    });

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
};