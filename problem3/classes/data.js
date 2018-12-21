var server = {

    url: 'http://demo1308716.mockable.io/',
    getData: function() {
        var responseFetched = fetch(
            this.url, {
                    mode: 'cors',
                    method: 'get',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials':true,
                        'Access-Control-Allow-Methods':'POST, GET'
                    }
                }
          );
          
        return responseFetched.then((response) => {
            if(response.status !== 200) {
                console.log('Error: ' + response.status);
                return;
            }
            return response.json();
        }).then((tree) => {;
            return tree;
        }).catch((err) => {
            return err;
        });
    }
};