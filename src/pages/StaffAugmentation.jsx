export default function StaffAugmentation() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="bg-[#1e293b] text-white py-20 text-center">
        <h1 className="text-4xl font-bold text-orange-400">
          Staff Augmentation
        </h1>
        <p className="mt-4 text-gray-300">
          Home / Services / Staff Augmentation
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-6">

          <h2 className="text-3xl font-bold text-orange-500">
            Staff Augmentation
          </h2>

          <p className="text-gray-600 leading-relaxed">
            NexVoya Tech experience and expertise can help make your next move.
            From evolving customer expectations to emerging technologies, businesses
            today are more at risk of disruption than ever before.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you're facing internal challenges, cultural shifts, or need a new
            business strategy — we help you adapt, scale, and succeed in a fast-changing world.
          </p>

          {/* FEATURES */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">

            {[
              "Enterprise Strategy & Transformation",
              "Client Experience Management",
              "Data Science & Engineering",
              "Regulatory Compliance",
              "Finance & Risk Transformation",
              "Innovation Management",
              "Program Management",
              "Mergers & Acquisitions",
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
                <h3 className="font-semibold text-gray-800">
                  ✔ {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div>

          {/* SEARCH */}
          <div className="bg-white p-4 shadow rounded mb-6">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full border p-2 rounded mb-3"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Search
            </button>
          </div>

          {/* SERVICES LIST */}
          <div className="bg-white p-4 shadow rounded">
            <h3 className="font-bold mb-4 text-orange-500">Services</h3>

            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">System Integration</li>
              <li className="hover:text-blue-600 cursor-pointer">Cloud Computing</li>
              <li className="hover:text-blue-600 cursor-pointer">Web Development</li>
              <li className="hover:text-blue-600 cursor-pointer">Mobile App Development</li>
              <li className="hover:text-blue-600 cursor-pointer font-bold text-orange-500">
                Staff Augmentation
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}