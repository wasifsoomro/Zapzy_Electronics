"use client"

import { SiToptal } from 'react-icons/si';
import convertToSubCurrency from '../app/lib/ConvertToSubCurrency'
import CheckoutPage from '../components/Checkoutpage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined')
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripePayment = ({total}: {total: number}) => {
    return (
        <div>
            <h1 className='text-6xl font-bold text-center'>Checkout $ {total.toFixed(2)}</h1>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: 'payment',
                    amount: convertToSubCurrency(total),
                    currency: 'usd'
                }}
            >
                <CheckoutPage amount={total} />
            </Elements>

        </div>
    )
}

export default StripePayment

// "use client";

// import convertToSubCurrency from '../app/lib/ConvertToSubCurrency';
// import CheckoutPage from '../components/Checkoutpage';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
//     throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined');
// }

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// const StripePayment = ({ total }: { total: number }) => {
//     return (
//         <div>
//             <h1 className='text-6xl font-bold text-center'>Checkout - Pay ${total.toFixed(2)}</h1>

//             <Elements
//                 stripe={stripePromise}
//                 options={{
//                     mode: 'payment',
//                     amount: convertToSubCurrency(total),
//                     currency: 'usd'
//                 }}
//             >
//                 <CheckoutPage amount={total} />
//             </Elements>
//         </div>
//     )
// }

// export default StripePayment;
