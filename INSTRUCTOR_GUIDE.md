# Instructor Guide - Server-Side Fetching Practice

## 📋 Exercise Overview

Students will practice server-side data fetching in Next.js by building a user directory that fetches and displays data from a public API.

## 🌐 API Information

**API Name**: JSONPlaceholder  
**Endpoint**: `https://jsonplaceholder.typicode.com/users`  
**Authentication**: None required (completely free)  
**Rate Limiting**: None  
**Documentation**: https://jsonplaceholder.typicode.com/guide/

### Why This API?

- ✅ No API key or authentication required
- ✅ Reliable and fast (provided by Typicode)
- ✅ Returns consistent, predictable data
- ✅ Perfect for educational purposes
- ✅ CORS-enabled for all origins
- ✅ HTTPS endpoint

## 🎯 Learning Objectives

By completing this exercise, students will:

1. Understand how to make server-side API calls in Next.js
2. Practice defining TypeScript interfaces based on API responses
3. Learn error handling for async operations
4. Experience the simplicity of server components vs. client-side fetching
5. Build a responsive UI with Tailwind CSS

## ⏱️ Estimated Time

- **Beginner**: 45-60 minutes
- **Intermediate**: 30-45 minutes
- **Advanced**: 20-30 minutes

## 📝 Step-by-Step Solution Guide

### Step 1: Define the User Interface (5-10 min)

Students need to inspect the API response and create a matching TypeScript interface:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
  };
}
```

**Common Mistakes:**
- Forgetting to make address an object
- Missing the nested city property
- Using incorrect types (e.g., string for id)

### Step 2: Create the Fetch Function (10-15 min)

```typescript
async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    const users: User[] = await response.json();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}
```

**Common Mistakes:**
- Forgetting to await fetch
- Not parsing JSON with .json()
- Missing error handling
- Not specifying the return type

**Discussion Points:**
- Why we check `response.ok`
- The importance of error handling
- Why we return an empty array on error

### Step 3: Make Component Async (5 min)

```typescript
export default async function Home() {
  const users = await getUsers();
  // ...
}
```

**Common Mistakes:**
- Forgetting the `async` keyword
- Forgetting to `await` the function call
- Trying to use hooks (useState, useEffect) in a server component

**Key Teaching Point:**
This is only possible in Next.js server components! Traditional React components cannot be async.

### Step 4: Display the Data (15-20 min)

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {users.map((user) => (
    <div key={user.id} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-3">{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
  ))}
</div>
```

**Common Mistakes:**
- Forgetting the `key` prop in map
- Incorrect property access (e.g., user.city instead of user.address.city)
- Not wrapping map in a parent container

## 🎓 Teaching Tips

### Before Starting

1. **Show the API**: Open https://jsonplaceholder.typicode.com/users in browser
2. **Explain Server Components**: Clarify server vs. client components
3. **Demo the Completed Version**: Show what they're building

### During the Exercise

1. **Encourage Incremental Building**: Test after each step
2. **Use Console.log**: Have them log the data to verify it's fetching
3. **Check Network Tab**: Show the request in DevTools
4. **Compare Client vs. Server**: Discuss why this approach is simpler

### Common Questions

**Q: "Why don't we use useState?"**  
A: Server components run once on the server. There's no re-rendering, so no state management needed.

**Q: "Where does the data fetching happen?"**  
A: On the Next.js server, before the HTML is sent to the browser.

**Q: "Can we use useEffect instead?"**  
A: No, useEffect only works in client components. Server-side fetching is simpler!

**Q: "What if the API is slow?"**  
A: Next.js can cache the results. We'll learn about caching strategies later.

## 🐛 Debugging Checklist

If students encounter issues:

- [ ] Is the component marked as `async`?
- [ ] Are they `await`ing the fetch call?
- [ ] Is the API URL correct and accessible?
- [ ] Did they parse the JSON response?
- [ ] Is their interface matching the API structure?
- [ ] Are they accessing nested properties correctly (user.address.city)?
- [ ] Did they add the `key` prop in the map?

## 🎨 Extension Activities

### Easy
- Add more user fields (username, company)
- Style the cards differently
- Add a page title and description

### Medium
- Add a search filter (requires client component)
- Create separate UserCard component
- Add loading state (using Suspense)

### Hard
- Implement pagination
- Add individual user detail pages (dynamic routes)
- Combine with posts from `/posts` endpoint

## 📊 Assessment Rubric

| Criteria | Points | Description |
|----------|--------|-------------|
| TypeScript Interface | 20 | Correct interface matching API |
| Fetch Function | 25 | Proper async/await and error handling |
| Async Component | 15 | Component correctly marked as async |
| Data Display | 25 | All user fields displayed correctly |
| Code Quality | 15 | Clean, readable code with proper formatting |

**Total**: 100 points

## 🔗 Additional Resources

- [Next.js Data Fetching Docs](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Server vs Client Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

## 📁 Repository Structure

```
workshop-5-practice_template/  (Student version)
└── app/
    └── page.tsx  (With TODO comments and instructions)

workshop-5-practice_complete/  (Reference solution)
└── app/
    └── page.tsx  (Fully implemented)
```

---

**Quick Start for Students**:
```bash
cd workshop-5-practice_template
npm install
npm run dev
```

Then open `app/page.tsx` and follow the TODO comments!

