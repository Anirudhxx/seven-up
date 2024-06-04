# 7 Up 7 Down Game

This is a simple 7 Up 7 Down dice game built using React for the frontend and Node.js with Express for the backend.

## Table of Contents

- [7 Up 7 Down Game](#7-up-7-down-game)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
  - [Running the Application](#running-the-application)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

This project implements a simple 7 Up 7 Down game where a player can bet on the outcome of a dice roll. The player starts with 5000 points and can place bets on whether the sum of the dice will be below 7, exactly 7, or above 7. The game provides different multipliers for winning bets.

## Features

- User starts with 5000 points.
- User can bet on three options: 7 Up, 7 Down, or Lucky 7.
- User can place bets of 100, 200, or 500 points.
- Random dice results are generated via an API.
- The user's points are updated based on the outcome of the dice roll.

## Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

Follow these steps to set up and run the project locally after pulling from GitHub.

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/seven-up.git
   cd seven-up
   ```
2. Navigate to the server directory:
   ```sh
   cd server
   ```
3. Install the backend dependencies:
   ```sh
   npm install
   ```
4. Start the backend server:
   ```sh
   node index.js
   ```

### Frontend Setup

Frontend Setup

1. Navigate to the client directory:
   ```sh
   cd ../
   ```
2. Install the frontend dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```
   
The frontend application will start and open in your default browser at http://localhost:3000.

### Running the Application

    Ensure that both the backend server and the frontend development server are running.
    Open your web browser and navigate to http://localhost:3000.

### Usage

    The game starts with 5000 points.
    Select a bet amount from the available options (100, 200, 500).
    Choose one of the three betting options: 7 Up, 7 Down, or Lucky 7.
    Click the "Roll Dice" button to roll the dice.
    The result will be displayed, and your points will be updated based on the outcome.

### Technologies Used

    Frontend: React, Material-UI, Axios
    Backend: Node.js, Express

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.
License

This project is licensed under the MIT License. See the LICENSE file for details.