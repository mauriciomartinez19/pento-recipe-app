# Pento Recipe App

## Running the Application

To run the application locally, follow these steps:

1. Clone this repository to your local machine. `git clone https://github.com/mauriciomartinez19/pento-recipe-app.git`
2. Navigate to the project directory in your terminal.
3. Install dependencies by running: `npm install`.
4. Start the development server by running: `npm start`.
5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Additional Information

- **Tech Stack**: React.js, TypeScript
- **Dependencies**: React, React DOM, React Scripts, TypeScript
- **API Used**: The Meal DB API
- **Custom Hook**: `useMeals` hook to fetch data from the API
- **Auto Refetching**: Implemented auto refetching every 10 seconds using a custom solution (no external libraries used)
- **Filtering**: Includes client-side filtering by category and area due to limitations in the API
- **Pagination**: Pagination feature implemented on the client side due to limitations in the API

## Environment Configuration

This repository includes a `.env` file. Please note that the `.env` file is not included in the `.gitignore`. It's worth mentioning that the inclusion of the `.env` file is for the purpose of this technical test and not for a real-world application.

## Folder Structure

```
├── public
|   ├── index.html
|   └── ...
├── src
|   ├── api
|   ├── components
|   ├── hooks
|   ├── types
|   ├── utils
|   ├── App.tsx
|   ├── Index.tsx
|   └── ...
├── .env
├── package.json
└── ...
```