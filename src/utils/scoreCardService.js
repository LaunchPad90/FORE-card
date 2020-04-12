import tokenService from './tokenService';

const BASE_URL = '/api/scorecard';

export default {
    index,
    create
}

function index() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

function create(ScoreCard) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(ScoreCard)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}