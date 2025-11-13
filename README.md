# Workshop 5 - Server-Side Fetching Practice

## 🎯 Learning Objective

Practice fetching data from an API using Next.js server-side components by completing a partially-built user directory.

## 📝 Exercise Instructions

Your task is to **complete 5 simple steps** to fetch and display users from an API.

### API Information

- **API URL**: `https://jsonplaceholder.typicode.com/users`
- **No API Key Required**: This is a free, public API - just use the URL!

## ✅ 5 Simple Steps to Complete

### Step 1: Complete the User Interface ✏️
Add two missing properties to the `User` interface:
- `phone` (string)
- `website` (string)

### Step 2: Add the API URL 🔗
Replace `'PUT_URL_HERE'` with the actual API URL:
```typescript
'https://jsonplaceholder.typicode.com/users'
```

### Step 3: Make Component Async ⚡
Add the `async` keyword before `function Home()`

### Step 4: Call the Fetch Function 📞
Uncomment this line:
```typescript
const users = await getUsers();
```

### Step 5: Display the Users 🎨
Remove the placeholder div and uncomment the `users.map()` code that's already written for you!

## 💡 What You're Learning

- **Server Components**: Components that run on the server and can be async
- **fetch()**: How to get data from an API
- **async/await**: Modern JavaScript for handling asynchronous operations
- **TypeScript**: Type-safe interfaces for API data

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## 🔍 Testing Your Solution

Your implementation is working when:
- ✅ No TypeScript errors in your editor
- ✅ The dev server runs without errors
- ✅ You see 10 user cards displayed on the page
- ✅ Each card shows name, email, phone, website, and city

## 💪 Bonus Challenges

If you finish early:

1. **Add Error Handling**: Wrap the fetch in a try-catch block
2. **Add More Styling**: Change colors or add more hover effects
3. **Display More Fields**: Show the user's `username` or `company.name`

## 📚 Resources

- [Next.js Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Using fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

## ❓ Common Questions

**Q: Why don't we use useState or useEffect?**  
A: Server components run once on the server. No re-rendering = no state needed!

**Q: Where does this code run?**  
A: On your Next.js server, before the HTML is sent to the browser.

**Q: What if I get stuck?**  
A: Check the instructor's completed version in `workshop-5-practice_complete`!

Good luck! 🎉
