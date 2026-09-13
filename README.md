## Project Name: DevStack

## About The Project

Dev Stack is a React-based technology stack builder that allows users to select their preferred tools to build a personalized development stack. Users can add technologies to their stack, remove individual technologies, or clear the entire stack with interactive UI feedback.

## Technology use

React 19 
TypeScript
Vite
Tailwind CSS 4
React Icons 
React Toastify
JSON

## Features

1. Explore Technologies – Browse technologies with category, description, rating and difficulty in a responsive card grid.

2. Build Your Stack – Add any technology to stack in the sidebar with live count and duplicate protection.

3. Manage With Feedback – Remove single items or clear all with instant toast notifications and empty-state messaging.


## Questions Answered

## 1. What is JSX, and why is it used in React?

JSX is HTML-like syntax inside JavaScript. It is used in React because it makes UI code short and readable.

## 2. What is the difference between props and state?

Props are data passed into a component from its parent and should not be changed inside it. State is data a component owns and can change, and changing it re-renders the UI.

## 3. What does the useState hook do, and where did you use it in this project?

useState stores a value that can change over time and re-renders the component when updated. I used it in `CardSection.tsx` as `const [stack, setStack] = useState<Technologie[]>([])` to keep the selected technologies, and in `App.tsx` to hold the fetch promise.

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is useful when I need to run something after the component renders. I can use it for fetching data from /data.json when the app loads, instead of running the fetch again every time the component re-renders.

## 5. Why does every item in a .map() list need a unique key prop?

The key helps React understand which item in the list has changed, been added, or removed. In my project, I used a key for each technology when rendering the technology cards and the selected stack items.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something only when a certain condition is true. I used it in the stack section to show an empty message when there are no selected technologies:

{stack.length === 0 && <p>Your stack is empty</p>}

I also used the same idea for the button, where it changes from Add to Stack to Selected when the technology is already in the stack.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

I pass data from the parent to the child using props. For example, I pass technologie, stack, and setStack to TechnologieCard.

<TechnologieCard
    technologie={technologie}
    stack={stack}
    setStack={setStack}
/>

The child can then use setStack to update the state in the parent. For example, when I click Add to Stack, the child adds the selected technology to the parent's stack.
