# **BUILD**

## **Table of contents** 
### 1. [**About**](#about)
### 2. [**Environment**](#environment)
### 3. [**Development**](#development)
>#### 3.1. [**Install and Run**](#install-and-run)
>#### 3.2. [**Style Guide**](#style-guide)
>#### 3.3. [**Security**](#security)
### 4. [**Production**](#production)       

## **About**

The **BUILD.md** is a file to check the environment and build specifications of **horusec-docs** project.


## **Environment**

- [**NodeJS**](https://nodejs.org/en/): ^16.X
- [**NPM**](https://npmjs.com/): ^8.0.X
- [**GNU Make**](https://www.gnu.org/software/make/): ^4.2.X

## **Development**

Set up your environment and then run the commands to run and check your project.

### **Install and Run**

Run the command below to install the project's dependencies:

```bash
make install
```

And then to view the project on a web page, run:

```bash
make run
```

And then check if the web server is available at the address `http://localhost:1313/docs`

### **Style Guide**

All project files must have the [**license header**](./copyright.txt). You can check if all files are in agreement by running the following command in project root:

```bash
make license
```

If it is necessary to add the license in any file, run the command below to insert it in all files that do not have it:

```bash
make license-fix
```

## **Production**

To generate a production build, run the command below at the root of the project:

```bash
npm run build
```

A directory named `dist/` will be generated, it contains the compiled project ready to be hosted on a web server.
