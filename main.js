/* Sample code to perform trivial operation on Blitline */
/* Requires an APPLICATION_ID which you can get from blitline.com for free and without obligation, or e
ven an email. */

var Blitline = require('./lib/blitline');
var blitline = new Blitline();


/* Replace MY_APP_ID with your Blitline application_id */
var applicationId = "MY_APP_ID"; 

/* The new recommended way to submit jobs to Blitline is via a simple json hash */

blitline.addJob({
    "application_id": applicationId,
    "src":"http://cdn.blitline.com/filters/boys.jpeg",
    "functions":[
        {
            "name":"resize_to_fit",
            "params":{
                "width":100
            },
            "save":{
                "image_identifier":"MY_CLIENT_ID"
            }
        }
    ]
});

blitline.postJobs( function(response) {
    console.log(response);
})
