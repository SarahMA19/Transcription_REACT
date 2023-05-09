import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useState, useEffect, useContext } from "react";
import { WEB_URL } from "../lib/CONSTENTS";
import CheckoutForm from "../components/CheckoutForm";
import { DataContext } from "../context/DataProvider";
import { AuthContext } from "../context/AuthProvider";



// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51N5KkbFAmOGYijZ17UAJriFsl0t3IdBE2DXUvBD9QxXUiAv3Yt9KgIVh27gzUmmd3UrjeoAXmmv1nZFhsfPrieRL00lNd44Rwt");


const Checkout = () => {

    const [clientSecret, setClientSecret] = useState("");
    const { cart } = useContext(DataContext);
    const { user } = useContext(AuthContext);
    const [data, setData] = useState('');

    const handleDataChange = (newData) => {
    setData(newData);
    };

    useEffect( () => {
        // create payment intenet as soon as this componet FIRST renders
        // with an API call to flask
        fetch(WEB_URL + "/pay/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({'cart': cart, 'user' : user}),
          })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));

    }, []);

    const appearance = {
        theme: 'stripe',
    };


    const options = {
        clientSecret,
        appearance,
    };

      return (
        <>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
               
            )}

      
        </>
        
      );
    
    
    
}
    


export default Checkout;