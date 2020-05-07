# Volkswagen email corperate communications templates

⚠️ This is the "Email Template" repository, you may need to look at the [CMS repository](https://github.com/whynotearth/Volkswagen-email-corporate-communications-CMS)

## Installation

1. Rename example.env to .env
2. yarn install
3. yarn build

Note: yarn start is faster but it's output is not reliable at all.

## Get output for backend

When you want to get an output to use in backend, you should change environment variable FOR_BACKEND=true in .env file and build again.  
There is a helper that works with this variable, When you enable this environment variable, `for_backend` helper returns it's first argument instead of second.

## Test backend output with a sample data

For testing generated output for backend in local, run `node ./test-backend/handlebars-compile.js > ./test-backend/output.html` and see the generated output.html file in test-backend folder. You can change passed data to template in test-backend/all-data.json


## Tools

[<img src="https://raw.githubusercontent.com/whynotearth/shinta-mani-wild/master/src/assets/img/browserstack-logo.png">](https://browserstack.com)

[emailonacid.com](https://emailonacid.com)  
[Foundation emails](https://get.foundation/emails/docs/)  
[handlebarsjs](https://handlebarsjs.com/)  