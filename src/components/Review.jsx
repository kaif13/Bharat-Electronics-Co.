function Review() {
  const reviews = [
    {
      name: "Rakesh Yadav",
      location: "Sitapur",
      rating: 5,
      comment:
        "Fan quality bahut achi hai, same day shop se mil gaya. Staff bhi helpful tha.",
    },
    {
      name: "Shivani Singh",
      location: "Sitapur",
      rating: 5,
      comment:
        "WhatsApp par price aur details mil gayi thi, shop visit karke easily purchase kar liya.",
    },
    {
      name: "Aman Gupta",
      location: "Sitapur",
      rating: 4,
      comment:
        "Switches aur wiring ka acha collection hai. Rates bhi reasonable lage.",
    },
  ];

  return (
    <section className="bg-black px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
            Customer Reviews
          </p>

          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            What Customers Say About Our Shop
          </h2>

          <p className="mt-3 text-sm text-stone-400 sm:text-base">
            Real feedback from local customers in Sitapur.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    {review.name}
                  </p>
                  <p className="text-xs text-stone-400">{review.location}</p>
                </div>

                <p className="text-yellow-400 text-sm">
                  {"★".repeat(review.rating)}
                </p>
              </div>

              {/* Comment */}
              <p className="mt-3 text-sm text-stone-300 leading-6">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;
