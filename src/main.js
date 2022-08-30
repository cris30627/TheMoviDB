// //Creación de la funcion asincronica
// const API_RANDOM = `https://api.thecatapi.com/v1/images/search`;
// const API_FAVORITE = `https://api.thecatapi.com/v1/favourites`;

// const queryString = [
//     '?',
//     'limit=10',
//     '&api_key=f948dafc-512d-4867-8e68-b3713baa8df4'
// ].join('');

// const img = document.querySelector('img');
// const btnCatGet = document.querySelector('button');
// const catRandons = document.querySelector('#catRandon');
// const newError = document.querySelector('#error');
// const catFavorite = document.querySelector('#catFavorite');

// const fetchData = async (urlApi, op) => {
//     try {
//         const response = await fetch(urlApi,op);
//         if(response.status !== 200){newError.innerHTML = "error";}
//         const data = await response.json();
//         return data;
//     } catch (error) {   
        
//     }
// }

// //fUNCION DE rAMDOM
// const getCatsRandom = async () =>{
//     const catRandon = await fetchData(`${API_RANDOM}${queryString}`);
//     let view =`
//     ${catRandon.map(item => `
//     <img  src="${item.url}" alt="gatitos" width="250px" height="250px">
//     <button type="button" onclick="saveCatsfAVORITE(${item.id})">Add Favotite</button>
//     `).splice(0,2)}
//     `;
//     catRandons.innerHTML = view;
//     console.log("Aleatorios Cat");
//     console.log(catRandon);
// }

// btnCatGet.onclick = getCatsRandom;

// const getCatsfAVORITE = async () =>{
//     const catRandonFavorite = await fetchData(`${API_FAVORITE}${queryString}`);
//     let view =`
//     ${catRandonFavorite.map(item => `
//     <img  src="${item.image.url}" alt="gatitos" width="250px" height="250px">
//     <button type="button">Remove Favotite</button>
//     `)}
//     `;
//     catFavorite.innerHTML = view;
//     console.log("Mostrar Favoritos");
//     console.log(catRandonFavorite[0].image.url);
// }
// const saveCatsfAVORITE = async (id_img) =>{
//     const saveRandonFavorite = await fetchData(`${API_FAVORITE}${queryString}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify(
//             {
//                 'image_id': `${id_img}`   
//             }
//         ) 
//     });
//     console.log("Mostrar a Guardar");
//     console.log(saveRandonFavorite);
// }
// getCatsfAVORITE();

const apiRandonCat = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=f948dafc-512d-4867-8e68-b3713baa8df4';

const apiFavoriteCat = 'https://api.thecatapi.com/v1/favourites?api_key=f948dafc-512d-4867-8e68-b3713baa8df4';

const apiDeleteCat = 'https://api.thecatapi.com/v1/favourites';

// const addCat = document.querySelector("#addCatFavorite");
//Para leer

const getRandonCat = async () => {
    const response = await fetch(apiRandonCat);
    const data = await response.json();
    const div = document.querySelector("#randonCats__item");
   
    const array = [];
    data.forEach(cat => {
        
        const img = document.createElement("img");
        img.src = cat.url
        img.width = 150;
        img.height = 200
        array.push(img);
    
        const button = document.createElement("button");
        button.innerHTML = "Agregar a favoritos";
        button.onclick = () => {
            addFavoriteCat(cat.id)
        }
        array.push(button)
    });
    div.append(...array);
    // console.log(data);
    // return data;
}
//Para obtener lo enviado
const getFavoriteCat = async () => {
    const response = await fetch(apiFavoriteCat);
    const data = await response.json();
    const div = document.querySelector("#favoriteCats__item");
    div.innerHTML = "";
    const array = [];
    data.forEach(cat => {
        
        const img = document.createElement("img");
        img.src = cat.image.url
        img.width = 150;
        img.height = 200
        array.push(img);
    
        const button = document.createElement("button");
        button.innerHTML = "Elimiar de favoritos";
        button.onclick = () => {
            removeFavoriteCat(cat.id)
        }
        array.push(button)
    });
    div.append(...array);
    console.log(data);
    return data;

}
//Para agregar
const addFavoriteCat = async (id) => {
    const response = await fetch(apiFavoriteCat, {
        method: "POST",
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify({
            image_id: id
        }),
    });
    getFavoriteCat();
    console.log(response);
    return response;
}
const removeFavoriteCat = async (id) => {
    const response = await fetch(`${apiDeleteCat}/${id}?api_key=f948dafc-512d-4867-8e68-b3713baa8df4`,
    {
        method: "DELETE",
        
    });
    console.log(response);
    getFavoriteCat();
}




getRandonCat();
getFavoriteCat();