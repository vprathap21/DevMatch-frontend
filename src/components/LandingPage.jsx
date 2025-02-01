import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-700">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-pink-500 text-2xl font-bold">DevMatch</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-300 hover:text-white">
              Features
            </Link>
            <Link href="#safety" className="text-gray-300 hover:text-white">
              Safety
            </Link>
            <Link href="#support" className="text-gray-300 hover:text-white">
              Support
            </Link>
            <Link href="#download" className="text-gray-300 hover:text-white">
              Download
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="btn btn-outline btn-sm text-gray-300 hover:text-white"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="btn btn-sm bg-gradient-to-r from-pink-500 to-purple-500 text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
            Code Together <br /> Match Forever
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Connect with developers who share your stack, your passion, and your
            coding style.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="btn btn-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white"
            >
              Create Account
            </Link>
            <button className="btn btn-lg btn-outline text-gray-300">
              Sign in with GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Match with developers who get your{" "}
            <span className="text-pink-500">code</span>
          </h2>
          <p className="text-gray-400 mb-12">
            Our algorithm matches you with developers based on your tech stack,
            coding style, and project interests.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tech Stack Match",
                description:
                  "Find developers who work with the same languages and frameworks.",
              },
              {
                title: "Project Collaboration",
                description:
                  "Connect through shared open source contributions and side projects.",
              },
              {
                title: "Code Style Compatibility",
                description:
                  "Match with developers who share your coding conventions and practices.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="card bg-gray-800 shadow-lg p-6 rounded-lg"
              >
                <h3 className="text-2xl text-pink-500 font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default LandingPage;
