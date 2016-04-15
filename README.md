### Node JS AfricasTalking Sample App

Sample app with AT API's - Voice, SMS, USSD, Shortcode demo


### How to run
- Install node.js version ver >5.x.x (this demo runs with ES6 language features)
- Install mysql (create user root, and database wired)


### Update config file at config/config.js
- add AT username and apiKey
- add DB user and password


```bash
$ npm install
$ node app.js
```

### Routes

- Routes are under routes folder (sms, ussd, voice)
- they are mapped by app.js (look at the route imports)
