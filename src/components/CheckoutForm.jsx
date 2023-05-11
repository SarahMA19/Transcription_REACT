
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import "../styles/stripeElements.css"
import { Link } from "react-router-dom";




const CheckoutForm = (filename, duration) => {
    const stripe = useStripe();
    const elements = useElements();

    /*
    What are the steps/flow here
    1. Create payment intent- checking on the back with the cart- DONE!
    2. If stripe has loaded, user submits payment info
    3. We process that info- aka send api call to stripe
    4. Show status- has it been submitted?  Processing? complete/incomplete?
    5. Re-Route back to table page and show full transcription
    */

    // set some state hooks that will aid us in conditional handling
    const [showPay, setShowPay] = useState(true);
    const [showForm, setShowForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    // handlePay  --> this is our api call to Stripe
    const handlePay = async (event) => {
        event.preventDefault();
        setShowPay(false);  // disable form submission
        // make the api call to confirm payment to stripe
        const data = await stripe.confirmPayment({
            elements,
            redirect: 'if_required'
        });
        console.log('payment intent received', data);
        if (data['error']) {
            console.log(data['error']['code']);
            setErrorMessage(data['error']['message']);
            setShowForm('error');
        } else {
            setShowForm(false)
        }
    }
    return (
        <div className="container">
            {
                showForm === true ?
                    <form id="payment-form" onSubmit={handlePay}>
                        <PaymentElement id="payment-element"></PaymentElement>
                        <button id="submit" disabled={!showPay || !elements || !stripe} className="btn btn-primary m-auto">
                            <span id="btn-text">
                                {showPay ? 'Submit Payment' : 'Processing . . .'}
                            </span>
                        </button>
                    </form>
                    : showForm === 'error' ?
                        <>
                            <h3>Something went wrong processing your payment please try again!</h3>
                            <h4>{errorMessage}</h4>
                        </>
                        :
                        <>
                            <h2>Thank you for your payment!</h2>
                            <Link to="/transcription" className="btn btn-secondary">Click Here to see transcription</Link>
                        </>
            }
        </div>
    )
}
export default CheckoutForm;