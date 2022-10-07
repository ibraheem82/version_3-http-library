/**
 * * [🚀Astro] Library
 * * Library for making [HTTP] request to the space and server.
 * 
 * @Version 3.0.0
 * @author Ibraheem Omikunle
 * @license AST
 * 
 * 
 **/

// class AstroHTTP {
    // ! making a http get request
//     get(url) {
//         fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
//     }
// }


// ! Using [promise]
class AstroHTTP {
    // ! making a http [get] request
    // get(url) {
    //     return new Promise((resolve, reject) => {
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => resolve(data))
    //     .catch(err => reject(err));
    //     });
    // }


    // ! Using [async] function 
    // * when using async you dont need a promise.

    async get(url) {
        const astroPeople = await fetch(url);

        const peopleDatas = await astroPeople.json();
        return peopleDatas;
    }





    // ! making a http [post] request
    async post(url, data) {
        const postPeople = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            // ! sending the data that is passed in
            body: JSON.stringify(data)
        });
        const singleData = await postPeople.json();
        return singleData;
    }






    // ! making a http [PUT] request
    async put(url, data) {
        const updatePerson = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            // ! sending the data that is passed in
            body: JSON.stringify(data)
        });
        const updateData = await updatePerson.json();
        return updateData;
       
    }

    // ! making a http [DELETE] request

    async delete(url) {
     
        const deletePerson = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type' : 'application/json'
            }
        });
        const deleteData = await deletePerson.json();
        // const deleteData = await 'User Deleted.....';
        return deleteData;
    }
}