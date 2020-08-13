<!-- Badges session -->
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/K-Schaeffer/NLW-2?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/K-Schaeffer/NLW-2">
  
  <a href="https://github.com/K-Schaeffer/NLW-2/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/K-Schaeffer/NLW-2">
  </a>
  
  <a href="https://www.linkedin.com/in/k-schaeffer/">
    <img alt="By Kauan Schaeffer" src="https://img.shields.io/badge/Made%20by-Kauan%20Schaeffer-important">
  </a>
  
  <a href="https://nextlevelweek.com/episodios/discovery/1/edicao/2">
    <img alt="NextLevelWeek#2" src="https://img.shields.io/badge/Next Level Week%20-2.0-%237519C1">
  </a>
  
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">  
</p>

<p align="center">
    	<img alt="Project language" src="https://img.shields.io/badge/Project%20Lang-Portuguese 🇧🇷-informational">
	<a href="https://github.com/K-Schaeffer/NLW-2/blob/master/README.md">
    		<img alt="Swap readme language" src="https://img.shields.io/badge/Portuguese%20ReadMe-Yes-important">
  	</a>

	
</p>

<!--Banner session-->
<h1 align="center">
    <img alt="Proffy-Banner" title="Proffy" src=".github/proffy-banner.png"/>
</h1>

<!--Status session-->
<h4 align="center"> 
	🚧  Proffy 👨‍🏫 Completed ✔️ 🚧
</h4>

<!-- Index session-->
<p align="center">
 <a href="#-about-the-project">About</a> •
 <a href="#-functionalities">Functionalities</a> • 
 <a href="#-layout">Layout</a> • 
 <a href="#-preview">Preview</a> • 
 <a href="#-running-the-project">Running Locally</a> • 
 <a href="#-technologies">Technologies</a> • 
 <a href="#-license">License</a>
</p>

<!--About session-->
## 💻 About the project

Project built during the **NLW #2- Next Level Week 2**, which is a brazilian programming event hosted by [Rocketseat](https://nextlevelweek.com/episodios/discovery/1/edicao/2).
The NLW is an online coding experience, with lots of practice, chalenges and tips. All the event happens during one week, after that, the content is removed from the Rocketseat website.

👨‍🏫 Proffy - This project is a tribute to all brazilian teachers that had their special holiday in the week that the project was developed. Proffy is a platform that has the mission to connect teachers and students of all subjects.
<br>To me, this project had a special mission in the reinforcement of the front-end development basis, specially with HTML/CSS.

---

<!--Functionalities session-->
## ⚙️ Functionalities

- [x] Teachers can sign up with a form which they complete their data:
  - [x] name and last name
  - [x] photo
  - [x] whatsapp number
  - [x] biography
  - [x] subject
  - [x] cost of its hour
  - [x] avaliable schedule

- [x] Students can search for teachers and:
  - [x] filter by subject, weekday and hour
  - [x] get in touch directly in the teacher whatsapp number
  
---

<!--Layout session-->
## 🎨 Layout
<p align="center">
<a href="https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web">
  <img alt="Figma layout" src="https://img.shields.io/badge/Layout%20Preview%20-Figma-%2304D361">
</a>
</p>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Web Homepage" title"Web-Home" src=".github/web-home.png" width="800px">
  
  <img alt="Web Give-classes page" title="Web-Give-classes" src=".github/web-give-classes.png" width="800px">
</p>

### Mobile

<p align="center">
  <img alt="Mobile preview" title="Mobile-preview"  src=".github/mobile-preview.png" width="800px">
  
</p>

---

<!--Preview session-->
## 📺 Preview

<p align="center">
<img alt="Preview" src=".github/Preview-Functionality.gif" width="800px">
</p>

---

<!--Running session-->
## 🚀 Running the project locally

This project is divided in:
1. [Frontend](/src/views/pages) 
2. [Backend](/src/server.js) 
3. [Database](/src/database) 

<!--💡Obs-->

### Requirements

* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)

#### 🎲 Running it

```bash

# Clone this repo
$ git clone https://github.com/K-Schaeffer/NLW-2.git

# Access the project folder from the command prompt
$ cd NLW-2

# Install all dependencies
$ npm install

# Execute the "dev" script
$ npm run dev

# Soon the project will start in the port: 3000 - open http://localhost:3000 

```

Opcionally, you may want to have a clean database, therefore:

```bash

# Delete the database.sqlite file
$ rm -r src/database/database.sqlite

# Execute the file which creates all tables
$ node src/database/db.js

```

After that, just run the project, register teachers, and search for them :)

---

<!--Tecnologies session-->
## 🛠 Technologies

The following tools where used in the project development:

#### **Front-end**  ([HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)  +  [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) + [JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript))

#### **Back-end**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[Nunjucks](https://mozilla.github.io/nunjucks/)**
-   **[Nodemon](https://nodemon.io)**

> See the [package.json](./package.json) file

#### **Database**  ([Sqlite-Async](https://www.npmjs.com/package/sqlite-async))

#### **Useful tools**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)**
-   Layout:  **[Figma](https://www.figma.com/)**  →  **[Layout (Proffy)](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web)**
-   Markdown:  **[EmojiCopy](https://www.emojicopy.com)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Badges:  **[Shields.io](https://shields.io)**


<!--License session-->
## 📝 License

This project is under the [MIT](./LICENSE) license.

---

<!--Bottom session-->
<h4 align=center>Made with ❤️ by Kauan Schaeffer 👋 <a href="https://www.linkedin.com/in/k-schaeffer/">Contact me :)</a></a></h4>
