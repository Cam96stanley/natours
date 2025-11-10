/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(
  'pk_test_51SRjSq4WaHKZ9Xf6pHuoXPQu0FBxTLvn5Fs9txxy2O2MFGEQOvhCL5SrphxBjAivhHKc8OOmSSmTQ7owxqbsEtDA0079CK22Cy',
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(
      `http://localhost:8000/api/v1/bookings/checkout-session/${tourId}`,
    );

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
