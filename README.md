# Workshop 5 - Server-Side Fetching Practice

## 🎯 Learning Objective

Practice fetching data from an API using Next.js server-side components.

## 📝 Exercise Instructions

Your task is to fetch a list of users from an API and display them on the page.

### API Information

- **API URL**: `https://jsonplaceholder.typicode.com/users`
- **No API Key Required**: This is a free, public API
- **Returns**: An array of 10 user objects

### User Data Structure

Each user object contains:
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "address": {
    "city": "Gwenborough"
  }
}
```

## ✅ Steps to Complete

1. **Define the User Interface**
   - Create a TypeScript interface matching the user data structure
   - Include: id, name, email, phone, website, and address (with city)

2. **Create the Fetch Function**
   - Write an async function called `getUsers()`
   - Use `fetch()` to get data from the API
   - Parse the JSON response
   - Handle errors appropriately
   - Return the array of users

3. **Make the Component Async**
   - Add the `async` keyword to the Home component
   - Call `getUsers()` and store the result in a variable

4. **Display the Data**
   - Map over the users array
   - Display each user in a card showing:
     - Name (as a heading)
     - Email
     - Phone
     - Website
     - City

## 💡 Key Concepts

- **Server Components**: In Next.js 13+, components are server components by default
- **Async Components**: Server components can be async, which is perfect for data fetching
- **No useState/useEffect**: Server-side fetching doesn't need React hooks
- **SEO Benefits**: Data is rendered on the server, improving initial load and SEO

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## 🔍 Testing Your Solution

Your implementation is working correctly when:
- The page displays 10 user cards
- Each card shows the user's name, email, phone, website, and city
- The page loads with the data already rendered (no loading spinner needed!)

## 💪 Bonus Challenges

If you finish early, try these:

1. **Add Error Handling UI**: Display a user-friendly error message if the fetch fails
2. **Add Styling**: Make the cards more visually appealing
3. **Add More Fields**: Display additional user information like company name
4. **Add Search**: Create a search bar to filter users (hint: this will require a client component!)

## 📚 Resources

- [Next.js Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

Good luck! 🎉
