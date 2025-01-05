# Habit Tracker Application

A React-based habit tracker application that allows users to track their habits, view statistics, and manage daily streaks. This application leverages Redux for state management and Material-UI for UI components.
---

## Live Demo

Check out the live version of the application here:  
👉 [Todo Application Live Demo](https://habit-tracker-redux.netlify.app/)

---
---

## Features

- **Track Habits**: Add, update, and remove habits.
- **Daily Completion**: Mark habits as completed for the current day.
- **Streak Management**: Calculate current and longest streaks for each habit.
- **Statistics Dashboard**: View aggregated statistics like total habits, habits completed today, and the longest streak.
- **Responsive Design**: Built with Material-UI for a responsive and clean user interface.

---

## Tech Stack

- **Frontend**: React, TypeScript, Material-UI
- **State Management**: Redux with Redux Toolkit
- **API**: Mocked using JSONPlaceholder or Redux Toolkit actions.

---

## Project Structure

```plaintext
src/
├── components/
│   ├── AddHabitForm.tsx  # Add form for Habits
│   ├── HabitStats.tsx    # Dashboard for habit statistics
│   ├── HabitList.tsx     # List view for habits
├── store/
│   ├── store.ts          # Redux store configuration
│   ├── habit-slice.ts    # Habit slice with actions and reducers
├── utils/
│   ├── habitUtils.ts     # Utility functions like getStreak
├── App.tsx               # Main application component
└── index.tsx             # Application entry point
