import { Checkbox } from "@material-tailwind/react";

export default function Messanger({ links }) {
  const submitForm = (e) => {
    e.preventDefault();
    alert("Sended");
  };

  return (
    <section
      id="contact"
      className="relative w-full text-red-500 bg-[url('src/assets/bg/contacts.jpg')] bg-cover"
    >
      <h1 className="text-4xl p-4 font-bold tracking-wide text-white">
        Contacts
      </h1>

      <div className="relative p-5 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 p-5 md:px-0 mx-5">
          <div className="bg-gray-900 border border-red-500 w-full lg:w-1/2 h-full p-5 pt-8">
            <h3 className="text-2xl font-semibold mb-5">Links</h3>
            <div className="flex flex-col gap-3">
              {links.map((link) => 
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  className="flex items-center hover:text-white hover:bg-red-500 p-2"
                >
                  {link.name}
                </a>
              )}
            </div>
          </div>
        </div>
        <form
          className="w-full md:w-1/2 border border-red-500 p-6 bg-gray-900"
          onSubmit={submitForm}
        >
          <h2 className="text-2xl pb-3 font-semibold">Send Message</h2>
          <Checkbox label="Create profile" color="red" id="signUp" />
          <div>
            <div className="flex flex-col mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                rows="4"
                id="message"
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
              ></textarea>
            </div>
          </div>
          <div className="w-full pt-3">
            <button
              type="submit"
              className="w-full bg-gray-900 border border-red-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-red-500 hover:text-white text-xl cursor-pointer"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
