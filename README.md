# Welcome XP Electron

WelcomeXP ported to Electron - A Nody-Greeter theme to mimic the Windows XP login screen.

Introduction

Welcome XP Electron is an Electron-based application that mimics the classic Windows XP login screen. Originally created as a Nody-Greeter theme, this project has been ported to Electron to bring the nostalgic experience to modern platforms.

Features

    Classic Windows XP login screen interface
    User listings with profile pictures
    Password input and validation
    Shutdown options with Wine support on Linux

Installation

    Clone the repository:

    git clone https://github.com/steven2024/welcome-xp-electron.git
    cd welcome-xp-electron

Install dependencies:

    npm install

Install Wine (Linux only):

On Debian/Ubuntu:

    sudo apt update
    sudo apt install wine

Running the Application

    Start the Electron app:

    npm start

    The application should now be running and displaying the Windows XP login screen interface.

Usage

    Click on a user name to log in.
    Type your password in the provided input box.
    Click the shutdown button to turn off the computer. On Linux, this will execute the shutdown process using Wine.

Contributing

Contributions are welcome to improve Welcome XP Electron! Here's how you can help:

    Fork the repository.
    Create a new branch: git checkout -b my-feature-branch
    Make your changes and commit them: git commit -m 'Add some feature'
    Push to the branch: git push origin my-feature-branch
    Submit a pull request.
