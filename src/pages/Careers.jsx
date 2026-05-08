export default function Careers() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      
      {/* Hero Section */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold mb-4">
          Careers at NexVoya Tech
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Join our growing team and build innovative software solutions
          using modern technologies.
        </p>
      </div>

      {/* About */}
      <div className="max-w-4xl mx-auto mb-14">
        <h2 className="text-3xl font-semibold mb-4">
          Why Join Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl">
            Modern Tech Stack
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            Growth Opportunities
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            Flexible Work Culture
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-4xl mx-auto mb-14">
        <h2 className="text-3xl font-semibold mb-6">
          Open Positions
        </h2>

        <div className="space-y-4">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Java Full Stack Developer
            </h3>

            <p className="text-gray-400 mt-2">
              Spring Boot, React/Angular, MySQL
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Frontend Developer
            </h3>

            <p className="text-gray-400 mt-2">
              React.js, Tailwind CSS, API Integration
            </p>
          </div>

        </div>
      </div>

      {/* Apply Section */}
     {/* Apply Section */}
<div className="max-w-4xl mx-auto text-center">

  <h2 className="text-3xl font-semibold mb-4">
    Apply Now
  </h2>

  <p className="text-gray-400 mb-6">
    Submit your application using our official form.
  </p>

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLScZqEZqqvqPZjZ8QP3mC41GdVWKqR-lcNEarvjaPwsgZyy50g/viewform?usp=header"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold transition"
  >
    Apply Now
  </a>

</div>
    </div>
  );
}