'use client';

import { useEffect } from 'react';
// So it can pull the URL
import { useSearchParams, useRouter } from 'next/navigation';

export default function PaymentStatusAlert() {
    //Gets the search parameters from the URL
  const searchParams = useSearchParams();
  // it allows you to go to the actual page of stripe and back
  const router = useRouter();
  const paymentStatus = searchParams.get('payment');

  useEffect(() => {
    if (paymentStatus == 'success') {
      alert('Payment successful! Thank you for your purchase.');
      // It removes the query parameter without reloading the page, without a full reload - kind of cool 
      router.replace(window.location.pathname);
    } else if (paymentStatus == "cancelled"){
      alert('Payment was cancelled.');
      router.replace(window.location.pathname);
    }
  }, [paymentStatus, router]);

  return null; 
}