function ContactSection() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-2xl text-cyan-400 font-bold mb-4">
              Get In Touch
            </h3>

            <p className="text-slate-300">
              Reach out for maritime management solutions.
            </p>

            <div className="mt-6 space-y-3 text-slate-300">
              <p>📍 Mumbai, India</p>
              <p>📞 +91 9876543210</p>
              <p>📧 support@shipms.com</p>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-slate-800 text-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-slate-800 text-white"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full p-3 rounded-lg bg-slate-800 text-white"
            />

            <button
              className="bg-cyan-500 px-6 py-3 rounded-lg text-white font-semibold"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;