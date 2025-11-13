/**
 * Server-Side Fetching Practice Exercise
 * 
 * GOAL: Fetch a list of users from an API and display them on the page
 * 
 * API ENDPOINT: https://jsonplaceholder.typicode.com/users
 * 
 * INSTRUCTIONS:
 * 1. Create a TypeScript interface for the User data
 * 2. Create an async function to fetch the users from the API
 * 3. Make this component async and call the fetch function
 * 4. Display the users in a nice card layout
 * 
 * TIPS:
 * - Remember that server components can be async!
 * - Use fetch() to get data from the API
 * - Don't forget to handle errors
 * - The API returns an array of user objects
 */

// TODO: Step 1 - Define the User interface
// Each user has: id, name, email, phone, website, and address (with city)
// Example structure:
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "email": "Sincere@april.biz",
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "address": {
//     "city": "Gwenborough"
//   }
// }

interface User {
  // TODO: Add the user properties here
}

// TODO: Step 2 - Create an async function to fetch users
// Function should:
// - Use fetch() to get data from: https://jsonplaceholder.typicode.com/users
// - Parse the JSON response
// - Return the array of users
// - Handle errors appropriately

async function getUsers() {
  // TODO: Implement the fetch logic here
}

// TODO: Step 3 - Make this component async and fetch the data
export default function Home() {
  // TODO: Call getUsers() here and store the result
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          User Directory
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Fetched from JSONPlaceholder API
        </p>

        {/* TODO: Step 4 - Map over the users and display them in cards */}
        {/* 
          Create a grid layout that displays each user in a card showing:
          - Name (as heading)
          - Email
          - Phone
          - Website
          - City
        */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* TODO: Map users here */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-500">
              Users will appear here once you implement the fetch logic!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
