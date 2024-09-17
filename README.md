# Quiz React App

This is a Quiz Application built with **React** and **json-server** as the backend. The app is designed to provide a seamless and customizable quiz experience.

## Live Demo

Check out the live demo of the app [Quiz App](https://quiz-app-beta-swart.vercel.app/).

## Features

- **Customizable Questions**: All quiz questions are stored in the `json-server`. You can easily modify the question content by updating the data in the server.
- **Timer**: The quiz includes a timer that gives you **7 minutes and 30 seconds** to complete all the questions. The time can be adjusted per question by modifying the time value in the data.
- **Result Tracking**: After finishing the quiz, the app calculates and displays your result.
- **Highest Score**: The highest score is saved locally and shown to users at the end of each quiz attempt.

## How to Run

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Run the json-server:
    ```bash
    npm run server
    ```
3. Start the application:
    ```bash
    npm start
    ```

## Customization

- **Questions**: You can update or add new questions by editing the `questions.json` file in the data directory.
- **Timer**: Adjust the time per question by changing the relevant value in the `db.json` file.

## Technologies Used

- React.js
- Tailwind CSS
- json-server

Feel free to modify the app to fit your needs!
