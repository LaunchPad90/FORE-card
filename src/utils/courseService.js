import userService from './userService';
import tokenService from './tokenService';

const BASE_URL = './api/courses';

// export function getOne() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'Authorization': 'Bearer ' + tokenService.getToken()
//         }
//     };
//     return fetch(BASE_URL, options).then(res => res.json());
// }

export function index() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL + '/allCourses', options).then(res => res.json());
}


