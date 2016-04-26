# Text-Messages
Send text messages using twilio through node  server

##Step 1 :
  Copy the code into your editor
  
##Step 2 :
 Go to twilio.com and create an account and then get App ID and App Secret
   ,paste them in the following code
   ```javascript
       var client = require('twilio')('App SID','App Auth Token') ;
   ```
##Step 3 :
   In the following code paste your twilio number
  ```javascript
       app.get('/testtwilio',function(req,res){
	     client.sendMessage({
	   	      to : 'Any number',
		        from : 'Twilio Number ',
	         	body : 'love you Maha <3   '  
	     },function(err,data){
		       if(err){
		       	console.log(err);
		       }
		       else{
			       console.log(data);
		        }
	      });
      });
  ```
##Step 3 : 
   open the command promp,set the path and type 'npm install'
   
##Step 4 :
   Now you are all set.Open command prompt and run server.js.I would suggest you NODEMON tool to run the server because it's my favourite tool!
   
