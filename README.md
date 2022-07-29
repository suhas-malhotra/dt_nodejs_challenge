# Task 2

Commands to start the Server:-

    * npm i (Download the node modules files)
    * npm start (To start the server)
    * make a .env file (Details of file added below)

Nudge Data Model:-

    Title : string (Unique),
    Image : binData ,
    Icon : binData,
    Description : string,
    Date: sate,
    Time: [string , string], // specifies to and from
    Invitation : string,
    \_id: Autogenerated by mongodb,

Routes:-

    1) POST /api/v3/addNudge  Adding a Nudge
        * Will have all the details in the payload and will be saved in the database

    2) DELETE /api/v3/deleteNudge?Title  Delete a nudge with title
        * Sending the nudge title in query and deleting it from the database
    
    3) GET /api/v3/getNudge?Title Get a nudge
        *  Get the nudge details for the specific title

    4) GET /api/v3/getNudge/invite Get a nudge(Specific Details)
        * Only getting the nudge invitation string and with icon url
    
    5) GET /api/v3/allNudge Get all nudge
        *  Get all the nudges 
       

.env file(for the events task) :-

MONGO_URI = mongodb+srv://suhas:pooja0474@cluster0.rspit.mongodb.net/?retryWrites=true&w=majority
