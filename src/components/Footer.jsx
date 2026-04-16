import sadik from "../assets/sadik.jpeg";

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
        {/* 🔥 TOP SECTION */}
        <div className="grid gap-6 sm:grid-cols-2 items-center">
          {/* LEFT → OWNER */}
          <div className="flex items-center justify-center text-center sm:justify-start sm:text-left gap-3 sm:gap-4">
            <img
              src={sadik}
              alt="Owner"
              className="w-14 h-14 rounded-full object-cover border border-white/20"
            />

            <div>
              <p className="text-xs text-stone-400">Shop Owner</p>
              <p className="text-base font-semibold">Mr. Sadiq Maboob</p>
              <p className="text-xs text-stone-400">Trusted local service</p>
            </div>
          </div>

          {/* RIGHT → COMPANY INFO */}
          <div className="space-y-1 text-sm text-stone-300 text-center sm:text-right">
            <p className="font-semibold text-white">Bharat Electronics Co.</p>
            <p>📍 Sitapur, Uttar Pradesh</p>
            <p>🕒 9 AM – 8 PM</p>
            <p>📞 +91 99367 12393</p>
          </div>
        </div>

        {/* 🔥 BOTTOM (CENTER ON MOBILE) */}
        <div className="border-t border-white/10 pt-4 flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left gap-2 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} Bharat Electronics. All rights
            reserved.
          </p>

          <a
            href="https://www.kaifwebstudio.in"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            Designed by Kaif Web Studio
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
