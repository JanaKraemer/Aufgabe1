import * as Mongo from "mongodb";

console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "Zauberbild";
let db: Mongo.Db;
let highscore: Mongo.Collection;

//running on heroku?
if (process.env.NODE_ENV == "production") {
    //databaseURL = "mongodb+srv://username:password@hostname:port/database";
    //databaseURL = "mongodb+srv://Aden:mLabEIA2pw@eia2cluster-eqine.mongodb.net/EIA2Cluster"; //--username Aden
    //databaseURL = "mongodb+srv://Jana:kraemer99.@eia2-0bg0r.mongodb.net/Liste";
    databaseURL = "mongodb+srv://Jana:kraemer99.@eia2-0bg0r.mongodb.net/EIA2";
    databaseName = "Zauberbild";
}

// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        highscore = db.collection("Zauberbild");
    }
}

export function insert(_doc: CanvasElement): void {
    // try insertion then activate callback "handleInsert"
    highscore.insertOne(_doc, handleInsert);
}

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

// try to fetch all documents from database, then activate callback
export function findAll(_callback: Function): void {
    // cursor points to the retreived set of documents in memory
    let cursor: Mongo.Cursor = highscore.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, pointArray: CanvasElement[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(pointArray));
    }
}