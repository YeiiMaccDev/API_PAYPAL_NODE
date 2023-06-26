# API_PAYPAL_NODE


## 🚀 Project:
- 

## Description:
REST API that integrates Paypal payments.


#### Create Payment
See example payment with defined products:
```http
  GET /create-payment
```

Payment with dynamic products sent in the body of the request:
```http
  POST /create-payment
```




## Run Locally
Clone the project
```bash
  git clone https://github.com/YeiiMaccDev/API_PAYPAL_NODE.git
```

Go to the project directory
```bash
  cd my-project
```

Install dependencies
```bash
  npm install
```

Start the server
```bash
  npm run dev
```

## Environment variables
To run this project, you will need to add the environment variables to your **.env** file, example in **.env.example**


## APIs used:
This project uses the following APIs:
- **PORT:** Number of port where the project is executed.
- **HOST:** Application domain or in default the localhost.
- **NODE_ENV:** development or production.

- **PAYPAL_API:** PAYPAL URL to make the payment. Test(https://api-m.sandbox.paypal.com) or production.
- **PAYPAL_API_SECRET:** Paypal Secret key.
- **PAYPAL_API_CLIENT:** Paypal Client ID.


You can get your client and secret id from [Paypal Developer](https://developer.paypal.com/developer/applications/)