import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactSection() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uyrt99h",
        "template_12gp93i",
        e.target,
        "user_ZtPVkPDCvLkdavIaWpzUf"
      )
      .then((res) => {
        setsubmitted(true);
        settoggle(true);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  const [submitted, setsubmitted] = useState(false);
  const [toggle, settoggle] = useState(false);
  // const handleToggle = () => {
  //   settoggle(true);
  // };

  // const [values, setvalues] = useState({
  //   name: "",
  //   user_email: "",
  //   message: "",
  // });
  // const handleNameInputChange = (event) => {
  //   setvalues({ ...values, name: event.target.value });
  // };
  // const handleEmailInputChange = (event) => {
  //   setvalues({ ...values, user_email: event.target.value });
  // };
  // const handleMessageInputChange = (event) => {
  //   setvalues({ ...values, message: event.target.value });
  // };
  // const handleSubmitted = () => {
  //   // event.preventDefault();
  //   setsubmitted(true);
  //   settoggle(true);
  // };

  return (
    <>
      <div
        className="flex justify-center items-center bg-gray-300"
        id="Contact"
      >
        <div className="flex justify-center items-center bg-gray-100 p-8 rounded shadow-md w-auto  m-4 ">
          <form action="" onSubmit={sendEmail}>
            <div>
              <h3 className="text-center font-bold m-4 text-4xl">
                Let's Get In Touch!
              </h3>
            </div>
            <div className="m-4 flex items-center justify-center">
              <input
                // onChange={handleNameInputChange}
                // value={values.name}
                className="border-2 w-full py-1  rounded-lg"
                type="text"
                name="name"
                placeholder=" Full Name"
                required
              />
            </div>
            <div className="m-4 flex items-center justify-center ">
              <input
                // onChange={handleEmailInputChange}
                // value={values.user_email}
                className="border-2 w-full py-1 rounded-lg "
                type="text"
                name="user_email"
                placeholder=" Email Address"
                required
              />
            </div>

            <div className="m-4 flex items-center justify-center">
              <textarea
                // onChange={handleMessageInputChange}
                // value={values.message}
                className="border-2 w-full py-1 rounded-lg"
                name="message"
                id="message"
                cols="50"
                rows="10"
                placeholder=" Message"
                required
              ></textarea>
            </div>
            {submitted ? (
              <div className="text-center bg-green-400 text-white rounded-md py-1">
                Sent, Thank you
              </div>
            ) : null}

            <div className="m-4 flex items-center justify-center">
              {/* <input
                type="submit"
                value="send"
                className="mx-8  bg-MediumPurple px-5 py-1 rounded-full  cursor-pointer text-white"
              /> */}
              <button
                // onClick={handleSubmitted}
                type="submit"
                value="send"
                className="mx-8  bg-MediumPurple px-5 py-1 rounded-full  cursor-pointer text-white focus:bg-green-400"
              >
                {toggle ? "sent" : "send"}
                {/* send */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
