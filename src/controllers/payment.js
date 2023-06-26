import axios from "axios";
import {
    HOST,
    PAYPAL_API,
    PAYPAL_API_CLIENT,
    PAYPAL_API_SECRET
} from "../../config.js";

export const createPayment = async (req, res) => {
    try {
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "10",
                    },
                },
            ],
            application_context: {
                brand_name: "Eccomerce-YeiiMaccDev.com",
                landing_page: "NO_PREFERENCE",
                user_action: "PAY_NOW",
                return_url: `${HOST}/capture-payment`,
                cancel_url: `${HOST}/cancel-payment`,
            },
        };

        // format the body
        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");

        // Generate an access token
        const {
            data: { access_token },
        } = await axios.post(
            `${PAYPAL_API}/v1/oauth2/token`,
            params,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                auth: {
                    username: PAYPAL_API_CLIENT,
                    password: PAYPAL_API_SECRET,
                },
            }
        );
        // console.log(access_token);

        // make a request
        const response = await axios.post(
            `${PAYPAL_API}/v2/checkout/orders`,
            order,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );
        // console.log(response.data);

        return res.json({
            pay:  response.data.links[1],
            data: response.data,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json("Something goes wrong");
    }

}

export const capturePayment = async (req, res) => {
    const { token } = req.query;

    try {
        const response = await axios.post(
            `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
            {},
            {
                auth: {
                    username: PAYPAL_API_CLIENT,
                    password: PAYPAL_API_SECRET,
                },
            }
        );

        res.json(response.data);

        // res.redirect("/payed.html");
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server error" });
    }

}
export const cancelPayment = (req, res) => {
    res.send({
        status: "CANCELLED",
        message: "Payment canceled."
    });
}