function createData() {

    var data = {};

    return {
        get: function(key) {
            return data[key];
        },
        set: function(key, val) {
            if(key !== undefined && val !== undefined) {
                data[key] = val;
            }
        }
    };

}

var data = createData();

data.set("name", "Janek");

console.log( data.get("name") );