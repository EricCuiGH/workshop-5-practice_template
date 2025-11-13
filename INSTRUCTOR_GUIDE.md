# Instructor Guide - Server-Side Fetching Practice (Simplified Version)

## 📋 Exercise Overview

Students complete 5 simple, guided steps to build a working user directory with server-side data fetching. Most of the code is already written - they just need to fill in the blanks!

## 🌐 API Information

**API Name**: JSONPlaceholder  
**Endpoint**: `https://jsonplaceholder.typicode.com/users`  
**Authentication**: None required  
**Perfect for**: Teaching without setup overhead

## 🎯 Learning Objectives

Students will:
1. Complete a TypeScript interface
2. Add an API URL to a fetch call
3. Make a component async
4. Use await to call an async function
5. Uncomment working code to display data

## ⏱️ Estimated Time

- **All Levels**: 15-30 minutes (much easier than before!)

## 📝 Step-by-Step Solution

### Step 1: Complete the Interface (2-3 min)

Students add two properties:
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

### Step 2: Add the API URL (1 min)

Replace the placeholder:
```typescript
const response = await fetch('https://jsonplaceholder.typicode.com/users');
```

### Step 3: Make Component Async (1 min)

Just add one word:
```typescript
export default async function Home() {
```

### Step 4: Uncomment the fetch call (1 min)

Remove the `//`:
```typescript
const users = await getUsers();
```

### Step 5: Uncomment the Display Code (1 min)

Remove the comment markers around the `users.map()` block and delete the placeholder div.

**That's it!** 🎉

## 🎓 Teaching Tips

### Before Starting (5 min)

1. **Show the API**: Open the URL in a browser so students see the data
2. **Run the completed version**: Show what they're building
3. **Explain the 5 steps**: Make it clear this is a fill-in-the-blanks exercise

### During the Exercise (15-20 min)

1. **Go step-by-step**: Don't let students jump ahead
2. **Test after each step**: Show them how to check progress
3. **Save often**: Remind them Next.js auto-refreshes

### Common Questions

**Q: "What does async do?"**  
A: It lets us use `await` to wait for data from the API.

**Q: "Why is most of the code already written?"**  
A: So you can focus on learning the key concepts without worrying about styling!

**Q: "Can I change the styling?"**  
A: Yes! After completing the steps, feel free to customize.

## 🐛 Debugging Checklist

If students have issues:

- [ ] Did they add both `phone` and `website` to the interface?
- [ ] Is the API URL correct? (No typos?)
- [ ] Did they add `async` before `function`?
- [ ] Did they uncomment the `const users` line?
- [ ] Did they remove the placeholder div?
- [ ] Did they uncomment the entire `users.map()` block?

## 💡 Key Teaching Points

### This is Simpler Than Client-Side!

Compare to client-side approach:
- ❌ No `useState` needed
- ❌ No `useEffect` needed
- ❌ No loading states needed
- ✅ Just `async` and `await`!

### Server Components Are Powerful

- Data fetching happens on the server
- HTML is sent fully rendered
- Better for SEO
- Faster initial page load

## 📊 Quick Assessment

Students have succeeded when they can:
- [ ] Explain what `async` and `await` do
- [ ] Show a working page with 10 users
- [ ] Describe where the code runs (server vs. client)

## 🎨 Extension Activities

### Easy (5-10 min)
- Change the background gradient colors
- Add the user's username to the card
- Change the emoji icons

### Medium (15-20 min)
- Add error handling with try-catch
- Display a loading message (using Suspense)
- Show the user's company name

### Hard (30+ min)
- Add a client-side search filter
- Create individual user detail pages
- Fetch and display user posts

## 📁 What's Included

The template provides:
- ✅ Complete CSS/Tailwind styling
- ✅ Full JSX structure (commented out)
- ✅ Proper TypeScript types
- ✅ Clear TODO markers

Students only need to:
- ✏️ Add 2 interface properties
- 🔗 Add 1 URL
- ⚡ Add 1 keyword
- 📞 Uncomment 1 line
- 🎨 Uncomment 1 code block

## 🎯 Success Criteria

### Minimum (Pass)
- All 5 steps completed
- Page displays users without errors

### Proficient
- Code works correctly
- Student can explain async/await
- Student can describe server-side fetching

### Excellent
- Completed a bonus challenge
- Can compare server vs. client fetching
- Clean, well-organized code

## 📊 Simplified Rubric

| Criteria | Points |
|----------|--------|
| Interface completed | 20 |
| API URL added | 20 |
| Component made async | 20 |
| Fetch called correctly | 20 |
| Users displayed | 20 |

**Total**: 100 points (all or nothing for each step!)

## 🔗 Quick Commands

**Start the template:**
```bash
cd workshop-5-practice_template
npm run dev
```

**Show the solution:**
```bash
cd workshop-5-practice_complete
npm run dev
```

---

## ✨ Why This Approach Works

✅ **Less Overwhelming**: Students see working code, not a blank file  
✅ **Clear Steps**: Numbered TODOs guide them  
✅ **Quick Wins**: Each step shows visible progress  
✅ **Focus on Concepts**: No time wasted on styling  
✅ **Confidence Building**: Success in 15-20 minutes!

This simplified version is perfect for:
- First-time Next.js students
- Introduction to server components
- Quick workshop sessions
- Building confidence with async/await

**Most students will finish in under 30 minutes!** ⏱️
