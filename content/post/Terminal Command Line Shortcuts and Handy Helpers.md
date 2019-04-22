---
title: Terminal Command Line Shortcuts and Handy Helpers
date: 2019-04-08T00:00:00.000Z
contentType: null
categories: dev notes
---

The following are some terminal commands that I have come across and found helpful, handy, often used and/or short-cutty. This is mostly aimed at beginners who haven't memorised a lot of commands yet or people who forget them a lot (like me!). Enjoy! ✨

*To open bash profile* in atom:
```
atom ~/.bash_profile
```

*Remove whole directory* (that is git directory or whatever) without being asked about y/n:
```
rm -rf <name-of-directory>
```

You installed live server globally with 
```
npm install live-server -g
``` 
so if you wanna uninstall have to do 

```
npm uninstall live-server -g
```

*For Sass!!*
```
sass —watch [name of sass DIR]/[name of sass file.scss]:[name of css DIR]/[name of css file.css]
```

*To check SSH keys and Config file*
```
atom ~/.ssh/config
```

*To make a new directory and go straight to it!*
```
mkdir newProject && cd newProject
```
