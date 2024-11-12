# Leveling System

A customizable leveling system built in Python, where users can gain experience points (XP), manage skills, and increase their level. This system is designed to allow users to add or delete skills, gain attribute points over time, and use those points to level up their skills. As users level up, they earn XP and gain additional attribute points at higher levels.

---

## Table of Contents
1. [Features](#features)
2. [System Overview](#system-overview)
3. [Installation](#installation)
4. [Usage](#usage)
5. [File Structure](#file-structure)
6. [Future Enhancements](#future-enhancements)
7. [Contributing](#contributing)

---

## Features

- **Customizable Skills**: Add, delete, and level up skills.
- **XP and Leveling System**: Earn XP to level up, with progressively higher XP requirements.
- **Attribute Points**: Earn attribute points over time, with the rate increasing at higher levels.
- **Modular Code Structure**: Organized into separate modules for ease of maintenance and expansion.

---

## System Overview

The leveling system works by allowing users to create a character with an initial level of 1. As time passes, users earn attribute points which can be applied to their skills. Each skill level up grants the user XP, and once the user reaches a certain XP threshold, they level up, earning more attribute points per hour at higher levels.

### Leveling Rules
1. **Attribute Points**: The user gains 1 attribute point per hour at level 1, which increases as they level up (e.g., 2 points/hour at level 5).
2. **Skill XP**: Each skill point increase rewards the user with 10 XP.
3. **Leveling Up**: Requires progressively more XP; for example, 100 XP for level 2, 500 XP for level 3, etc.

---

## Installation

### For Windows

1. **Clone the Repository**:
    - Install [Git for Windows](https://git-scm.com/download/win) if you don’t already have it.
    - Open **Git Bash** (installed with Git for Windows) or **Command Prompt** and run the following command to clone the repository:
    ```bash
    git clone https://github.com/yourusername/LevelingSystem.git
    cd LevelingSystem
    ```

2. **Install Python**:
    - Download and install [Python](https://www.python.org/downloads/) if you haven’t already.
    - Ensure Python is added to your system’s PATH during installation by checking the option “Add Python to PATH”.
    - After installation, open **Command Prompt** and verify Python is installed by running:
    ```bash
    python --version
    ```
    You should see the version of Python installed, e.g., `Python 3.x.x`.

3. **Install Dependencies**:
    - This project does not require any external dependencies, so you can skip installing additional packages.

4. **Run the Program**:
    - To run the program, execute the following command from the `LevelingSystem` directory:
    ```bash
    python main.py
    ```

### For Linux

1. **Clone the Repository**:
    - Open a terminal and run the following command to clone the repository:
    ```bash
    git clone https://github.com/yourusername/LevelingSystem.git
    cd LevelingSystem
    ```

2. **Install Python**:
    - On most Linux distributions, Python is pre-installed. Verify by running:
    ```bash
    python3 --version
    ```
    If Python is not installed, install it using:
    ```bash
    sudo apt update
    sudo apt install python3
    ```

3. **Install Dependencies**:
    - No external dependencies are required for this project.

4. **Run the Program**:
    - To run the program, execute:
    ```bash
    python3 main.py
    ```

---

### Additional Notes:
- If you're using a virtual environment (optional but recommended for isolating dependencies), you can create and activate one using:
    - For **Windows**:
    ```bash
    python -m venv venv
    .\venv\Scripts\activate
    ```
    - For **Linux**:
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

After activating the virtual environment, you can run the program using the commands above.


---

## Usage

After starting the program, follow the prompts to manage your character's skills and levels. Here’s a quick guide to get you started:

1. **Enter Your Name**: The program will prompt you to enter your name to create a new user profile.
2. **Show Status**: View your current level, XP, attribute points, and skills.
3. **Add/Delete Skills**: Add a new skill or delete an existing one.
4. **Level Up Skills**: Use attribute points to level up your skills, which earns you XP.
5. **Simulate Time**: (Testing option) Advance time by an hour to see attribute points accumulate.

**Example Commands**:
- Choose from menu options to perform actions.
- Follow prompts to add skill names or level up selected skills.

---

## File Structure


### Module Descriptions

1. **`user.py`**: Contains the `User` class, which tracks user attributes, level, XP, and skills.
2. **`skills.py`**: Defines functions for adding, deleting, and leveling up skills.
3. **`leveling.py`**: Handles XP gains, leveling up logic, and updating attribute points per hour.
4. **`main.py`**: Provides a user interface to interact with the leveling system.

---

## Future Enhancements

Potential features to add in future updates:
- **Skill Categories**: Group skills into categories for easier management.
- **GUI Interface**: Add a graphical user interface for enhanced user interaction.
- **Save/Load System**: Allow users to save progress and load profiles.
- **Multiplayer Compatibility**: Enable multiple users to manage separate profiles.

---

## Contributing

Contributions are welcome! If you have suggestions for improvements, feel free to fork the repository and create a pull request. You can also open an issue for any bugs or feature requests.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

---
## Thank you for using the Leveling System! Feel free to reach out if you have questions or need assistance.
