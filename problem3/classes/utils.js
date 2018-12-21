var flattenArray = [];

var utils = {

    flatten: function(data) {

        Object.entries(data).forEach(element => {
            if(typeof element === 'object') {
                if(element[1].children) {

                    var item = {"id": element[1].id, "label": element[1].label};
                    // item[element[1].id] = element[1].label;
                    flattenArray.push(item);

                    this.flatten(element[1].children);
                } else {
                    var item = {"id": element[1].id, "label": element[1].label};
                    //item[element[1].id] = element[1].label;
                    flattenArray.push(item);
        
                }
            } 
        
        });

        return flattenArray;
    }

}