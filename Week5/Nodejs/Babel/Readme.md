## Setting Up Babel
### Installation
Babel requires Node.js and npm installed on your system. If you do not have them, install them beforehand. Installation can be simply done running following code in a command line:

    $ npm install -g babel
  
Now we can run Babel like:

    $ babel script.js

### Linting ES6
Let’s install ESlint and babel-eslint altogether.

    $ npm install -g eslint babel-eslint
You can now run ESlint in a command line.

    $ eslint script.js
You can configure some rules in a .eslintrc file under your root directory.

    .eslintrc
    {
        "parser": "babel-eslint",
        "rules": {
            "strict": 0
        }
    }
