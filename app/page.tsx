/**
 * Server-Side Fetching Practice Exercise
 * 
 * GOAL: Complete the missing pieces to fetch and display users from an API
 * API ENDPOINT: https://jsonplaceholder.typicode.com/users
 */

// Step 1: Complete the User interface (add the missing properties)
interface User {
  id: number;
  name: string;
  email: string;
  // TODO: Add phone property (string)
  // TODO: Add website property (string)
  address: {
    city: string;
  };
}

// Step 2: Complete the fetch function
async function getUsers(): Promise<User[]> {
  // TODO: Add the fetch URL here: 'https://jsonplaceholder.typicode.com/users'
  const response = await fetch('PUT_URL_HERE');
  const users: User[] = await response.json();
  return users;
}

// Step 3: Add 'async' keyword to make this component async
// TODO: Add 'async' before 'function' below
export default function Home() {
  // Step 4: Call getUsers() and store the result
  // TODO: Uncomment the line below
  // const users = await getUsers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          User Directory
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Fetched from JSONPlaceholder API
        </p>

        {/* Step 5: Display the users */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* TODO: Replace the placeholder div below with the commented code */}
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-500">
              Users will appear here once you complete the steps above!
            </p>
          </div>

          {/* TODO: Uncomment this code to display users:
          
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {user.name}
              </h2>
              
              <div className="space-y-2 text-sm text-gray-700">
                <p>📧 {user.email}</p>
                <p>📱 {user.phone}</p>
                <p>🌐 {user.website}</p>
                <p>📍 {user.address.city}</p>
              </div>
            </div>
          ))}
          
          */}
        </div>
      </main>
    </div>
  );
}
