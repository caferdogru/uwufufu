# Uwufufu Clone

Uwufufu Clone is an Angular web application inspired by the Uwufufu project. It features a playful UI and allows users to interact with Uwuwufu items, add new ones, and view them in a list. The project demonstrates component-based architecture, service usage, and data management in Angular.

## Features

- Home screen with navigation
- List and detail views for Uwuwufu items
- Add new Uwuwufu items
- Data persistence using local JSON (assets/data/data.json)
- Modular Angular structure with reusable components

## Project Structure

```
uwufufu-clone/
├── angular.json
├── package.json
├── README.md
├── tsconfig*.json
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   ├── assets/
│   │   └── data/data.json
│   └── app/
│       ├── app.module.ts
│       ├── app-routing.module.ts
│       ├── app.component.*
│       ├── components/
│       │   ├── home-screen/
│       │   ├── uwuwufu/
│       │   ├── uwuwufu-item/
│       │   └── add-uwuwufu/
│       └── models/
│           ├── uwuwufu.model.ts
│           └── uwuwufu-item.model.ts
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (v6 or higher)
- Angular CLI (optional, for development)

### Installation

1. Clone the repository:
	```sh
	git clone https://github.com/your-username/uwufufu-clone.git
	cd uwufufu-clone
	```
2. Install dependencies:
	```sh
	npm install
	```

### Running the App

Start the development server:
```sh
npm start
```
The app will be available at `http://localhost:4200/`.

### Running Tests

To execute unit tests:
```sh
npm test
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.
