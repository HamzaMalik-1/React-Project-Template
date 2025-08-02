// 4️⃣ Apply to Other Components
// Now you can use the CSS variables in any component using:

// css
// Copy
// Edit
// background-color: var(--bg-color);
// color: var(--text-color);
// or apply custom classes conditionally:

// tsx
// Copy
// Edit
// <div className={`card ${theme === "dark" ? "border-light" : "border-dark"}`}>
//   Dashboard content
// </div>



// 🧪 Backend Endpoint Example (for refresh)
// Make sure your backend has something like:

// css
// Copy
// Edit
// POST /auth/refresh
// Body: { refreshToken: "..." }

// Returns: { accessToken, refreshToken }

//  If you haven't yet added /auth/refresh in your backend, you can simulate it for dev purposes too.
// /auth/refresh

