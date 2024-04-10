
import React from 'react'
import { FaEnvelopeCircleCheck } from "react-icons/fa6";

const Verification = () => {
  return (
    <div>
      <div className="container verify">
        <h1>Please verify your email</h1>
        <div className="mail-icon">
        <FaEnvelopeCircleCheck size='2x' color='gray'/></div>
        <p>Please verify your email address. We've sent a confirmation email to:</p>

        <p>Click the confirmation link in that email to begin using Dribble.</p>
        <br />
        <br />
        <p>Didn't recieve the email? Check your Spam folder, it may have been caught by a filter. If <br />
        you still don't see it, you can <a href="">resend the confirmation email.</a></p>
        <br /><br />
        <p>Wrong email address? <a href="">Change it.</a></p>
        <br /><br />
      </div>
    </div>
  )
}

export default Verification;
