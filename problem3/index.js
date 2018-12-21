(async function () {
    var data = await server.getData();

    var searchByNodeId = 11;

    var flattenArray = utils.flatten(data);

    var result = flattenArray.filter((item) => {
        return item.id == searchByNodeId;
    }).pop();

    var label = (result && result.label)?result.label:'No Label';
    console.log('Label: ' + label);

})();