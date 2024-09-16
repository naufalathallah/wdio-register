# Automation Testing for Cermati Registration

This project automates the registration process for [Cermati's registration page](https://www.cermati.com/gabung) using **WebdriverIO** with **TypeScript**. The project is structured using the **Page Object Model (POM)** design pattern, and test data such as email, first name, and last name are generated using the **Faker** library.

## Prerequisites

1. Node JS (^16)

```bash
   npm install
```

## Commands

```bash
   npm run wdio
```

## Project Structure

- `test/specs/`: Contains test specification files.
- `test/pageobjects/`: Contains page object files for managing web elements and actions.
- `test/data/`: Contains test data files, such as JSON or CSV files used in tests.
- `wdio.conf.ts`: The main configuration file for WebdriverIO.
- `screenshots/`: Contains screenshots of failed test case runs.
