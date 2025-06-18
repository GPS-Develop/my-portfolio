export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 bg-white text-gray-800">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold">👋 Hi, I'm Gurpreet Singh</h1>
        <p className="text-lg mt-2">Python developer & project builder.</p>
        <p className="text-md text-gray-600">I’m currently learning web dev and building real-world apps.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">💼 Projects</h2>

        <div className="border border-gray-200 p-4 rounded-md shadow-sm mb-4">
          <h3 className="text-xl font-semibold">Nutrition Facts CLI App 🥑</h3>
          <p className="text-gray-700">
            A command-line app that lets you enter food items and fetch nutrition info using the Nutritionix API.
            Built with Python, handles error cases, and logs data to JSON.
          </p>
          <a
            href="https://github.com/GPS-Develop/nutrition-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        <div className="border border-gray-200 p-4 rounded-md shadow-sm mb-4">
          <h3 className="text-xl font-semibold">📊 Budget Tracker CLI</h3>
          <p className="text-gray-700">
            A command-line tool to track expenses and income. Organizes transactions, filters by category, and saves data to JSON.
            Built with Python and tested using Pytest.
          </p>
          <a
            href="https://github.com/GPS-Develop/budget-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 hover:underline"
          >
            View on GitHub →
          </a>
        </div>
        <div className="border border-gray-200 p-4 rounded-md shadow-sm mb-4">
          <h3 className="text-xl font-semibold">📚 Book Tracker CLI</h3>
          <p className="text-gray-700">
            A command-line app to track books read, including title, author, and rating. Saves data to JSON and uses Pytest for testing.
          </p>
          <a
            href="https://github.com/GPS-Develop/Book_Tracker_CLI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

      </section>
    </main>
  );
}