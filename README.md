\# React + TypeScript Developer Internship Test



\*\*Candidate:\*\* Archit Nidhi  

\*\*Date:\*\* February 18, 2026



\## 📋 Table of Contents

1\. \[Development Workflow \& Best Practices](#development-workflow--best-practices)

2\. \[Domain Knowledge (POS, Retail, Inventory)](#domain-knowledge-pos-retail-inventory)

3\. \[Ownership and Communication](#ownership-and-communication)



---



\## I. Development Workflow and Best Practices



\### 1. Version Control (Git/GitHub)



\*\*Q: Describe the steps you would take to implement a new feature. Assume you are starting from the main branch, and you need to push your completed work for review.\*\*



**Q: Describe the steps you would take to implement a new feature. Assume you are starting from the main branch, and you need to push your completed work for review.**

1. **Start from an updated `main`:** I would ensure my local `main` branch is up-to-date with the remote repository: `git checkout main` and `git pull origin main`.
2. **Create a Feature Branch:** I would create a new branch off `main` with a descriptive name like `feature/add-user-profile-page`.
3. **Develop and Commit:** I would write the code for the feature, making small, logical commits with clear messages.
4. **Sync with Remote:** Periodically, I would push my branch: `git push origin feature/add-user-profile-page`.
5. **Open a Pull Request (PR):** On GitHub, I would open a PR to merge into `development`, filling out the template clearly.
6. **Address Feedback:** I would respond to reviewer comments and push new commits.
7. **Merge:** Once approved and checks pass, I would merge the branch and delete it.

**Q: If you encounter a merge conflict when trying to combine your feature branch back into the development branch, how would you resolve it?**

1. **Update Local Branch:** I would run `git checkout feature/my-feature` and then `git merge development` to identify conflicts.
2. **Identify Conflicted Files:** Git lists files with conflicts. I'd open them in my editor.
3. **Resolve Conflicts:** I'd look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) and manually edit to keep the correct code.
4. **Test the Code:** After resolving, I'd run the app and tests to ensure everything works.
5. **Stage and Commit:** I'd run `git add .` followed by `git commit` to complete the merge.
6. **Push:** Finally, `git push origin feature/my-feature` to update the PR.



**Q: You receive a report that a page in the application is loading slowly, but it seems fine on your local development machine. What are the first three steps you would take to diagnose the performance issue?**

1. **Check the Network Tab:** Open DevTools on production, go to "Network" tab to check for large payloads, slow API calls, or render-blocking resources.
2. **Analyze with Lighthouse:** Run a Lighthouse audit to get structured performance metrics and actionable suggestions.
3. **Simulate a Slower Network:** Use DevTools to throttle network (e.g., "Slow 3G") and CPU to replicate real user conditions.

**Q: If a complex component starts behaving unexpectedly in production, what tools or techniques would you use to pinpoint the exact line of code causing the error?**

1. **React Developer Tools:** Use the Components tab to inspect props and state in real-time.
2. **Console Logging with `useDebugValue`:** Strategically place console logs or use `useDebugValue` in custom Hooks for better inspection.
3. **Source Maps and Error Boundaries:** Rely on source maps to see original TypeScript code in console errors, and check Error Boundary logs for component stack traces.


**Q: Explain the principle of Separation of Concerns in the context of writing a React component. How does this principle relate to creating "clean, modular, and reusable code"?**

In React, Separation of Concerns means dividing a component's logic into distinct sections based on responsibility. This creates:
- **Clean Code:** Separating UI (JSX) from logic (state, handlers) makes code easier to read.
- **Modular Code:** Building small, independent pieces like custom Hooks for validation makes components focused.
- **Reusable Code:** Custom Hooks can be imported anywhere, and presentational components can be reused with different props.

**Q: Provide an example of a common utility function or custom Hook you might write in a project to improve reusability and reduce boilerplate code.**

A common custom Hook I'd write is `useForm` for handling form state. Check the [`/code-examples/useForm.ts`](./code-examples/useForm.ts) file for the complete implementation. This Hook encapsulates state logic, making any form component cleaner and reusable.

**Q: If you are asked to review a new screen design, what are two specific non-functional aspects you would scrutinize and potentially provide suggestions on?**

1. **Accessibility (a11y):** Check color contrast, focus indicators for keyboard navigation, semantic heading structure, and proper form labels.
2. **Responsiveness and Layout Stability:** Verify the design adapts to mobile/tablet views and includes loading states (skeletons/spinners) to prevent layout shifts.


**Q: What is a Point of Sale (POS) system, and what is its primary function in a retail business?**

A Point of Sale (POS) system is the hardware and software combination used to complete purchase transactions. Its primary function is to serve as the central hub for processing sales, calculating payments, and recording transaction data, while often integrating with inventory and CRM systems.

**Q: List three distinct data points or pieces of information that a frontend developer would typically handle when processing a single customer transaction on a POS interface.**

1. **Line Item Data:** Product ID (SKU), name, quantity, and unit price for each item.
2. **Transaction Totals:** Subtotal, tax, discounts, and final grand total.
3. **Tender/Payment Data:** Cash amount tendered, card payment status, or gift card information.

**Q: Scenario: A cashier tries to sell an item, but the system shows an "Out of Stock" warning, even though a manual count shows 5 units available. What are two possible reasons for this discrepancy from a technical perspective?**

1. **Stale Cache:** The frontend might be reading from a cached inventory value that hasn't been updated to reflect the 5 available units.
2. **Data Synchronization Lag:** In multi-store systems, inventory data might be eventually consistent, and the local store's database hasn't synced with the central system.
3. **Held/Reserved Inventory:** The 5 units might be reserved in abandoned shopping carts or layaway, making them unavailable for new sales.

**Q: You are assigned a task that requires an API endpoint, but the backend team has informed you they won't have it ready for another three days. How would you handle this situation to ensure you are still taking ownership and maximize your productivity?**

1. **Communicate:** Acknowledge the delay with my team lead and confirm the timeline.
2. **Build UI with Mock Data:** Create the entire interface using local mock data and TypeScript interfaces.
3. **Write Types and Services:** Define all TypeScript interfaces for expected API payloads and set up the service layer structure.
4. **Implement State Management:** Build the logic that will handle the data, testing with mock data.
5. **Write Tests:** Create unit and integration tests using mock data.
By the time the API is ready, the feature will be nearly complete, needing only the endpoint integration.




\- \[`useForm.ts`](./code-examples/useForm.ts) - A reusable custom Hook for form state management

