import md5 from 'md5';
import * as types from '../constants';

const marvelBaseEndPoint = process.env.REACT_APP_API_MARVEL_BASE_END_POINT;
const marvelAPIVersion = process.env.REACT_APP_API_MARVEL_VERSION;
const marvelEndPointGetCharacters = `${marvelBaseEndPoint}${marvelAPIVersion}/public/characters`;
const marvelPublicKey = process.env.REACT_APP_API_MARVEL_PUBLIC_KEY;
const marvelPrivateKey = process.env.REACT_APP_API_MARVEL_PRIVATE_KEY;

const date =  new Date();
const timeStamp = date.getTime();

let loadStateMarvelChars = () => {
    return {
        type: types.LOAD_CHARACTERS_MARVEL,
    }
}

let loadMarvelCharsSuccess = (dataChars) => {
    return {
        type: types.LOAD_CHARACTERS_MARVEL_SUCCESS,
        payload: dataChars,
    }
}

let loadMarvelCharsFailure = () => {
    return {
        type: types.LOAD_CHARACTERS_MARVEL_FAILURE,
    }
}

 
let loadMarvelChars = (limit, offset, orderBy) => {
    const marvelEndPointGetCharactersWithQuery = marvelEndPointGetCharacters +
    `?apikey=${marvelPublicKey}&ts=${timeStamp}&hash=${md5(timeStamp + marvelPrivateKey + marvelPublicKey)}&limit=${limit}&offset=${offset}&orderBy=${orderBy}`;

    return dispatch => {
        dispatch(loadStateMarvelChars());
        return fetch(marvelEndPointGetCharactersWithQuery)
                .then(results => {
                    if (results.status !== 200 ) {
                    console.log('Upsss');
                    throw Error(`HTTP Status Code is  ${results.status}`);
                    }
                    return results.json()
                })
                .then(data => {
                    if (data.code !== 200) throw Error(`Response Code Data is not 200 !`);
                    dispatch(loadMarvelCharsSuccess(data));
                })
                .catch(err => {
                    console.error(`Ups! Something Happended!`);
                    console.error(err);
                    dispatch(loadMarvelCharsFailure());
                });
    }
}

let updateFlagInfinityMarvelChars = (bool) => {
    return {
        type: types.UPDATE_FLAG_INFINITY_CHARACTERS_MARVEL,
        payload: {
            data: bool,
        }
    }
}


let loadStateDetailMarvelChar = () => {
    return {
        type: types.LOAD_DETAIL_MARVEL,
    }
}

let loadDetailMarvelCharSuccess = (detailChar) => {
    return {
        type: types.LOAD_DETAIL_MARVEL_SUCCESS,
        payload: detailChar,
    }
}

let loadDetailMarvelCharFailure = (err) => {
    return {
        type: types.LOAD_DETAIL_MARVEL_FAILURE,
        payload: {
            error: err,
        }
    }
}

let loadDetailMarvelChar = (characterId) => {
    const marvelEndPointGetCharactersWithQuery = marvelEndPointGetCharacters +
    `/${characterId}?apikey=${marvelPublicKey}&ts=${timeStamp}&hash=${md5(timeStamp + marvelPrivateKey + marvelPublicKey)}`;

    return dispatch => {
        dispatch(loadStateDetailMarvelChar());
        return fetch(marvelEndPointGetCharactersWithQuery)
                .then(results => {
                    if (results.status !== 200 ) {
                    console.log('Upsss');
                    throw Error(`HTTP Status Code is  ${results.status}`);
                    }
                    return results.json()
                })
                .then(data => {
                    if (data.code !== 200) throw Error(`Response Code Data is not 200 !`);
                    dispatch(loadDetailMarvelCharSuccess(data));
                })
                .catch(err => {
                    console.error(`Ups! Something Happended!`);
                    console.error(err);
                    dispatch(loadDetailMarvelCharFailure(err));
                });
    }
}

export { 
    loadMarvelChars,
    updateFlagInfinityMarvelChars,
    loadDetailMarvelChar
 };