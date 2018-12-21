const url = 'http://demo1308716.mockable.io/';

const responseFetched = fetch(
    url, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Methods':'POST, GET'
            }
        }
  );
  
  
responseFetched.then((response) => {
    if(response.status !== 200) {
        console.log('Error: ' + response.status);
        return;
    }
    return response.json();
}).then((tree) => {
    console.log(tree);
}).catch((err) => {
    console.log(err);
});