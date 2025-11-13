# Answer Key - Quick Reference

## What Students Need to Complete

### ✅ Step 1: Add 2 properties to the interface

**Before:**
```typescript
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
```

**After:**
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;      // ← ADD THIS
  website: string;    // ← ADD THIS
  address: {
    city: string;
  };
}
```

---

### ✅ Step 2: Replace 'PUT_URL_HERE' with the API URL

**Before:**
```typescript
const response = await fetch('PUT_URL_HERE');
```

**After:**
```typescript
const response = await fetch('https://jsonplaceholder.typicode.com/users');
```

---

### ✅ Step 3: Add 'async' keyword

**Before:**
```typescript
export default function Home() {
```

**After:**
```typescript
export default async function Home() {
```

---

### ✅ Step 4: Uncomment the getUsers() call

**Before:**
```typescript
// const users = await getUsers();
```

**After:**
```typescript
const users = await getUsers();
```

---

### ✅ Step 5: Uncomment the users.map() block

**Before:**
```typescript
<div className="bg-white rounded-lg shadow-md p-6 text-center">
  <p className="text-gray-500">
    Users will appear here once you complete the steps above!
  </p>
</div>

{/* TODO: Uncomment this code to display users:

{users.map((user) => (
  // ... card code ...
))}

*/}
```

**After:**
```typescript
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
```

(And delete the placeholder div)

---

## ✨ That's All!

These 5 simple changes will make the app work!

## 🧪 Testing

After completing all steps:
1. Save the file
2. Check http://localhost:3000
3. Should see 10 user cards displayed
4. No errors in console or terminal

## 🎯 Key Learning Points to Emphasize

1. **async/await**: Modern way to handle asynchronous operations
2. **Server Components**: Can be async (unlike client components)
3. **No useState/useEffect**: Server-side is simpler!
4. **TypeScript**: Interfaces ensure type safety
5. **fetch()**: Standard way to call APIs

---

**For Instructor Use Only** - Don't share with students until after completion!

