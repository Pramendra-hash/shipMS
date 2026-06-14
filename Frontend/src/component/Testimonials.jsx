function Testimonials() {
  const reviews = [
    {
      name: "James Wilson",
      role: "Fleet Manager",
      review: "Excellent ship management platform with real-time tracking."
    },
    {
      name: "Sarah Brown",
      role: "Port Officer",
      review: "The dashboard is intuitive and improves operational efficiency."
    },
    {
      name: "Michael Lee",
      role: "Marine Director",
      review: "One of the best maritime management solutions we've used."
    }
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Client Testimonials
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6"
            >
              <p className="text-slate-300">
                "{review.review}"
              </p>

              <h3 className="text-cyan-400 font-bold mt-4">
                {review.name}
              </h3>

              <p className="text-slate-500">
                {review.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;