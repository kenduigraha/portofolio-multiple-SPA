import md5 from 'md5';
import * as types from '../constants';

const marvelBaseEndPoint = process.env.REACT_APP_API_MARVEL_BASE_END_POINT;
const marvelAPIVersion = process.env.REACT_APP_API_MARVEL_VERSION;
const marvelEndPointGetCharacters = `${marvelBaseEndPoint}${marvelAPIVersion}/public/characters`;
const marvelPublicKey = process.env.REACT_APP_API_MARVEL_PUBLIC_KEY;
const marvelPrivateKey = process.env.REACT_APP_API_MARVEL_PRIVATE_KEY;

const date =  new Date();
const timeStamp = date.getTime();

const paramsValueGetChars = {
    apikey: marvelPublicKey,
    ts: timeStamp,
    hash: md5(timeStamp + marvelPrivateKey + marvelPublicKey),
};

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

 
let loadMarvelChars = () => {
    const marvelEndPointGetCharactersWithQuery = marvelEndPointGetCharacters +
    `?apikey=${marvelPublicKey}&ts=${timeStamp}&hash=${md5(timeStamp + marvelPrivateKey + marvelPublicKey)}`

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
                    // const dataChars = data.data.results;
                    // console.log(dataChars);
                    dispatch(loadMarvelCharsSuccess(data));
                })
                .catch(err => {
                    console.error(`Ups! Something Happended!`);
                    console.error(err);
                    dispatch(loadMarvelCharsFailure());
                });
    }
}

export { loadMarvelChars };