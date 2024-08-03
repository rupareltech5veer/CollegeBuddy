import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center font-sans">
      <header className="w-screen bg-gradient-to-r from-blue-500 to-green-500 text-white py-6 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-4xl font-bold">Support First Generation Low Income Students</h1>
          <nav>
            <a href="#mission" className="ml-4 text-lg hover:underline">Our Mission</a>
            <a href="#how-it-works" className="ml-4 text-lg hover:underline">How It Works</a>
            <a href="#features" className="ml-4 text-lg hover:underline">Features</a>
            <a href="#market-need" className="ml-4 text-lg hover:underline">Market Need</a>
            <a href="#about" className="ml-4 text-lg hover:underline">About Us</a>
            <a href="#infographic" className="ml-4 text-lg hover:underline">Infographic</a>
          </nav>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-6 py-12">
        <section id="mission" className="mb-16 flex flex-col md:flex-row items-center bg-gradient-to-r from-yellow-400 to-orange-400 p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2 text-center md:text-left md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-yellow-900">Our Mission</h2>
            <p className="text-gray-800">
              Empower, Educate, and Elevate. At our core, we strive to bridge the gap for First Generation Low Income Students by providing them with essential resources to succeed in their academic journey. We believe in equal opportunities for education and aim to empower these students to achieve their dreams.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="https://images.unsplash.com/photo-1554224154-22dec7ec8818" alt="Our Mission" className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section id="how-it-works" className="mb-16 flex flex-col md:flex-row items-center bg-gradient-to-r from-green-400 to-teal-400 p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">
            <img src="https://images.unsplash.com/photo-1565376450198-5d290d9da667" alt="How It Works" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 text-center md:text-left md:pl-8 order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4 text-green-900">How It Works</h2>
            <p className="text-gray-800">
              Students can create posts detailing their needs, whether for college tuition or specific educational items. Donors can choose to support these students by donating money or physical items. Through our platform, donors can track students' progress and see how their contributions make a real difference. Together, we can change lives and shape futures.
            </p>
          </div>
        </section>

        <section id="features" className="mb-16 text-center bg-gradient-to-r from-blue-400 to-indigo-400 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Key Features</h2>
          <ul className="list-disc list-inside text-gray-800 mx-auto max-w-xl">
            <li>Fundraising posts for monetary and item donations</li>
            <li>Badge system to highlight top donors and students, showcasing generosity and academic excellence</li>
            <li>Student appreciation system for tracking educational journeys, allowing donors to witness the impact of their support firsthand</li>
          </ul>
        </section>

        <section id="market-need" className="mb-16 flex flex-col md:flex-row items-center bg-gradient-to-r from-red-400 to-pink-400 p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2 text-center md:text-left md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-red-900">Market Need</h2>
            <p className="text-gray-800">
              In the U.S. alone, over 50% of students are from low-income families. These students face numerous challenges, including limited access to educational resources and financial support. By providing a platform that connects these students with donors, we address a critical need in the market, offering hope and opportunities to those who need it the most.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc" alt="Market Need" className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section id="about" className="mb-16 flex flex-col md:flex-row items-center bg-gradient-to-r from-purple-400 to-purple-700 p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2 text-center md:text-left md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-purple-900">About Us</h2>
            <p className="text-gray-800">
              We are dedicated to supporting First Generation Low Income Students by connecting them with generous donors. Our platform is designed to make a meaningful impact on students' lives, helping them overcome financial barriers and achieve academic success. Join us in this mission to create a brighter future for all.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" alt="About Us" className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section id="infographic" className="mb-16 text-center bg-gradient-to-r from-teal-400 to-teal-600 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-teal-900">Infographic</h2>
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="Infographic" className="rounded-lg shadow-lg mx-auto" />
        </section>
      </div>

      <footer className="w-full bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Helping First Generation Students. All rights reserved.</p>
          <p className="text-sm mt-2">
            Inspired by Project: Empower's vision to solve problems in underprivileged communities through code. We aim to foster a passion for giving and make a significant impact through our platform.
          </p>
        </div>
      </footer>
    </div>
    </main>
  );
}
