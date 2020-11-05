# PC_repair_website


This is a simple(raw) website created while trying to demonstrate the use of `node.js`, `express.js`,`jade` and `JavaScript` in Web-Applications

The app uses the `nodemailer` functionality which enables the host to send an email to the desired customer about the repairs/further info.

This repo-needs to be worked upon and following changes can be brought out:-

1. Improving content of the web-pages(About,Home,Contact).

2. Adding more number of pages in the website, talking more about hardware/software/virus-realted issues, etc.

3. Use of `passport.js` for login/signup functionalities.

4. Improving the styling of the web-pages.

5. A page dedicated solely to the company's products.

NOTE:-

In the app.js file the user needs to change the following :-
`
var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'person@gmail.com',
			pass: 'password',
		}
	});`

1. Service can be changed as per preference.

2. Make sure to enable the Appropriate WebBrowser 	features like allow "less secure apps to run".
 

 Rest all can be modified as per preference.