
# ![Logo](./public/logo.svg) News Website Project

This is a personal project for a news web application, where data from the New York Times API is consumed. The application is built with React and uses useContext for global state management. Additionally, it includes a system to unlock access to the news section through a form submission.n

## API Reference

#### Get all items

```http
  GET https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key={API_KEY}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


## Features

- Consumption of the New York Times API: The most recent news articles are retrieved.
- Global State Management with useContext: useContext is used to centralize the app's state and share the API data across different components.
- Unlock News Section: The news section is initially locked and is unlocked once a form is completed. This is also managed through global state.
- Responsive for smartphone and desktop

## Functionality
- API Consumption: When the application starts, a request is made to the New York Times API to fetch the news.
- Unlock Form: Before displaying the news, the user needs to complete a form. Once submitted, access to the news section is unlocked using the global state managed by `subcribeContext`.

## Technologies Used
- React
- useContext for global state management
- fetch for API calls
- New York Times API
- React Router Dom

## How to Run the Project

1. Clone the repository:

```bash
  git clone https://github.com/juaazn/web-news.git
```

2. Install dependencies:
```bash
  npm install
```

3. Run the application:
```bash
  npm run dev
```

## Authors

- [@juaazn ](https://github.com/juaazn)

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/juaazn)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/juan-diego-acosta-liscano-821ba619a/)
