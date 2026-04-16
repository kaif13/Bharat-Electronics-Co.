function Location() {
  return (
    <section className="bg-black px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
            Shop Location
          </p>

          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Visit Our Store in Sitapur
          </h2>

          <p className="mt-2 text-sm text-stone-400 sm:text-base">
            Check product availability on WhatsApp before visiting.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
          {/* Info */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">Bharat Electronics Co.</h3>

              {/* 👉 Replace landmark properly */}
              <p className="text-sm text-stone-400 mt-1">
                📍 Near [Your Landmark], Sitapur
              </p>

              <p className="text-sm text-stone-400">🕒 Open: 9 AM – 8 PM</p>
            </div>

            {/* 🔥 Open in Maps (DIRECT NAVIGATION) */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=27.735263,81.150015"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-black hover:bg-green-600 transition"
            >
              Open in Google Maps
            </a>
          </div>

          {/* 🔥 YOUR UPDATED MAP (RESPONSIVE) */}
          <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3109.965973488383!2d81.15001537647964!3d27.735263040514212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQ0JzA4LjciTiA4McKwMDknMDMuOSJF!5e1!3m2!1sen!2sin!4v1776317030775!5m2!1sen!2sin"
              className="w-full h-56 sm:h-64 lg:h-72 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Shop Location"
            ></iframe>
          </div>

          {/* Bottom Note */}
          <p className="mt-3 text-xs text-stone-400 sm:text-sm">
            Contact us on WhatsApp to confirm product availability before
            visiting.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Location;
