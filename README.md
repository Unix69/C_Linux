<div align="center">

<table style="width:320px">
	<tr>
		<td style="text-align:left">
			<img src="Images/Logo/GnuLinuxLogo.svg" alt="GNU/Linux" width="160" height="160">
		</td>
		<td style="text-align:right">
			<img src="Images/Logo/doxygen.svg" alt="Doxygen" width="160" height="160"> 
		</td>
	</tr> 
</table> 

  <h1>C_Linux</h1>
  
  <br>
  
  <!-- Badges -->
  <div align="bottom">
    <a href="https://github.com/Unix69/C_Linux/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/Unix69/C_Linux" alt="contributors" />
    </a>
    <a href="">
      <img src="https://img.shields.io/github/last-commit/Unix69/C_Linux" alt="last update" />
    </a>
    <a href="https://github.com/Unix69/C_Linux/network/members">
      <img src="https://img.shields.io/github/forks/Unix69/C_Linux" alt="forks" />
    </a>
    <a href="https://github.com/Unix69/C_Linux/stargazers">
      <img src="https://img.shields.io/github/stars/Unix69/C_Linux" alt="stars"/>
    </a>
    <a href="https://github.com/Unix69/C_Linux/issues/">
      <img src="https://img.shields.io/github/issues/Unix69/C_Linux" alt="open issues" />
    </a>
    <a href="https://github.com/Unix69/C_Linux/blob/master/LICENSE.md">
      <img src="https://img.shields.io/github/license/Unix69/C_Linux.svg" alt="license" />
    </a>
  </div>

  <br>
  <br>

  <p>
    A set of C-Unix examples showing usage of Unix syscall related to processes, threads, filesystem
  </p>
</div>

<br>
<br>
<br>


<div align="center" style="margin-right: 24px;">

  <div align="center" style="font-size: 26px; font-weight: bold; line-height: 1.3; text-align: center;">
    🧠 Founder & Developer
  </div>
  
  <br>
  <br>
  
  <img src="https://avatars.githubusercontent.com/u/111588387?v=4" width="80px;" alt="Giuseppe Pedone"/><br/>
  <br>
  <table style="border: 0; border-collapse: collapse; margin-top: 8px;">
    <tr>
      <td align="center" valign="middle">
        <a style="font-size: 18px;" href="https://github.com/Unix69">
          <sub><b>Giuseppe Pedone (Unix69)</b></sub>
        </a>
        <br/>
        <a href="mailto:giuseppe.pedone.developer@gmail.com">
          <img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white"/>
        </a>
        <a href="https://github.com/Unix69">
          <img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white"/>
        </a>
        <a href="https://t.me/Unix69">
          <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=flat&logo=telegram&logoColor=white"/>
        </a>
      </td>
    </tr>
  </table>

</div>

<br>
<br>



<a name="table-of-contents"></a>

### 📓 Table of Contents

Navigation index to fast explore the content:

- [Examples](#examples)
- [Getting Started](#getting-started)
- [License](#license)
- [Contributing](#contributing)
  - [Fork Project](#fork-project)
  - [Pull Request](#pull-request)
  - [Issue](#issue)
  - [Code Of Conduct](#code-of-conduct)
- [FAQ](#faq)
- [Authors](#authors)
- [Contacts](#contact-us)

<br>
<br>

<a id="getting-started"></a>

# Getting Started 🚀

[Table of Contents](#table-of-contents)

Follow these steps to get, install and set up the project and generate the documentation:

- [**1 - Verify Prerequisites and Dependencies**](#prerequisites)  
C_Linux needs to run on **hosts** equipped with specific **hardware** and **software**.  
So read carefully the **prerequisites** to respect and the **dependencies** to satisfy.

- [**2 - Get and Install**](#installation)  
Get the project package, then follow the **installation procedure** to correctly set up the environment.

- [**3 - Build**](#build)  
Compile the source code and generate executable artifacts according to your **build configuration**.

- [**4 - Setup and Configure**](#configuration)  
Adjust configuration files and system parameters required to **customize** the project behaviour.

- [**5 - Run**](#run)  
Start the project using the provided **startup script** or command sequence.

- [**6 - Uninstall**](#uninstall)  
Remove the project and all its dependencies from the system **safely and completely**.



<br>
<br>

<a id="prerequisites"></a>

## 💻 Prerequisites

Before building or running the project, make sure you satisgy the prerequisites to run the project:

- **Operating System**: GNU/Linux, Windows 
- **Software Dependencies**: GitHub, Doxygen, GNU Make, GNU C Compiler `

<br>
<br>

## 📦 Dependencies

Before building and generating documentation with **C_Linux**, make sure the following dependencies are installed on your system:

- **[GitHub](#install-github)** — *Optional.*  
  Even if you don’t have a GitHub account or Git installed, you can still generate documentation locally.  
  However, having a **GitHub account** and using **Git** is **recommended** for project deployment and version control.

- **[Doxygen](#install-doxygen)** — *Mandatory.*  
  Used to generate documentation from source code and Markdown files.  
  The project won’t build documentation without it.

- **[GNU Make](#install-gnu-make)** — *Mandatory.*  
  Required to run automated build and documentation generation tasks.  
  Used in this project to simplify commands such as:
  <pre>make doc</pre>
  and  
  <pre>make clean</pre>

<br>

Below are the detailed installation steps for each dependency, both on **Unix/Linux** and **Windows** systems.

<br>
<br>

<a id="install-github"></a>

<h2><img src="Images/Logo/GitHubLogo.svg" alt="GitHub" width="64px" height="64px"/> Install GitHub / Git </h2>

### 🐧 On GNU/Linux

<pre>
sudo apt update
sudo apt install git
</pre>

After installation, verify that Git is available:

<pre>
git --version
</pre>

To link your project to **GitHub**, create a free account at:  
👉 [https://github.com/signup](https://github.com/signup)

Then configure Git with your account details:

<pre>
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
</pre>

<br>
<br>


<h3><img src="Images/Logo/windows-svgrepo-com.svg" alt="Windows logo" width="24"/> On Windows </h3>



1. Download **Git for Windows** from:  
   👉 [https://git-scm.com/download/win](https://git-scm.com/download/win)

2. Run the installer and follow the setup wizard (leave default options checked).  
3. After installation, open **Git Bash** and verify:
   <pre>
   git --version
   </pre>

4. Optionally create a GitHub account at  
   👉 [https://github.com/signup](https://github.com/signup)

<br>
<br>

<a id="install-doxygen"></a>

<h2><img src="Images/Logo/doxygen.svg" alt="Doxygen" width="64px" height="64px"/> Install Doxygen </h2>

### 🐧 On GNU/Linux

<pre>
sudo apt update
sudo apt install doxygen graphviz
</pre>

Verify the installation:

<pre>
doxygen --version
</pre>

Optionally, you can generate a sample configuration file with:

<pre>
doxygen -g
</pre>

<br>
<br>


<h3><img src="Images/Logo/windows-svgrepo-com.svg" alt="Windows logo" width="24"/> On Windows </h3>

1. Download the Windows installer from:  
   👉 [https://www.doxygen.nl/download.html](https://www.doxygen.nl/download.html)

2. Run the `.exe` file and follow the setup wizard.  
3. After installation, open **Command Prompt** and check:
   <pre>
   doxygen --version
   </pre>

4. To enable UML and graphs, install **Graphviz** as well:  
   👉 [https://graphviz.org/download/](https://graphviz.org/download/)

<br>
<br>

<a id="install-gnu-make"></a>

<h2><img src="Images/Logo/GnuLinuxLogo.svg" alt="GNU/Linux" width="64px" height="64px"/> Install GNU Make </h2>

### 🐧 On GNU/Linux

GNU Make is usually preinstalled. Check it with:

<pre>
make --version
</pre>

If missing, install it via:

<pre>
sudo apt update
sudo apt install make
</pre>

<br>
<br>

<h3><img src="Images/Logo/windows-svgrepo-com.svg" alt="Windows logo" width="24"/> On Windows </h3>

You can install **GNU Make** in one of these ways:

#### ✅ Option 1: Using MinGW

1. Download and install **MinGW** from:  
   👉 [https://www.mingw-w64.org/](https://www.mingw-w64.org/)
2. During installation, select the “mingw32-make” package.
3. Add MinGW’s `bin` directory to your system PATH.
4. Verify installation:
   <pre>
   mingw32-make --version
   </pre>

You can then rename or alias it to `make` for convenience.

#### ✅ Option 2: Using Chocolatey (recommended if available)

If you have **Chocolatey** package manager installed:

<pre>
choco install make
</pre>

<br>
<br>

### 💡 Dependencies Verification

After installing all dependencies, verify them with:

<pre>
git --version
doxygen --version
make --version
</pre>

If all commands return valid version numbers, you’re ready to build and document your project 🎉

> 💡 Tip: You can also run the `doxygen.sh` script from the root directory.  
> It will automatically:
> - Check that Doxygen is installed. If it is not installed, the doxygen.sh script will fail ❌  and do not proceed.   
> - Otherwhise it:
>          - Generate a base `Doxyfile` if missing into the root directory.   
> -        - Apply the custom configuration for **C_Linux** on the Doxyfile

<br>
<br>

<a id="installation"></a>


## ⭐ Installation

To ***install*** the project follow this setps:

A. You can download the repository from GitHub:
  ⬇️ [https://github.com/Unix69/README-Template/archive/refs/heads/main.zip](https://github.com/Unix69/README-Template/archive/refs/heads/main.zip)

  manually or by **opening a terminal** into your project destination directory, and running the following commands:

  <pre>
  mkdir project-root #create the project root directory
  cd project-root #change to the project root directory
  wget https://github.com/Unix69/README-Template/archive/refs/heads/master.zip #make an http get request to get the project repository ** zip file ** 
  unzip master.zip #unzip the project master.zip file
  cp -R master/ ./ #copy all files recursively from the unziped master directory to your project root directory
  rm -rf master master.zip #remove the unziped master directory and master.zip file
  </pre> 

B. You can **clone the repository** from GitHub if you have Git installed by running the following commands:

  <pre>
  mkdir project-root #create the project root directory
  cd project-root #change to the project root directory
  clone https://github.com/Unix69/C_Linux.git #clone the project repository 
  cp -R C_Linux/ ./ #copy all files recursively from the C_Linux directory to your project root directory
  rm -rf C_Linux #remove the C_Linux directory. 
  </pre> 


⬇️ [Download ZIP](https://github.com/Unix69/README-Template/archive/refs/heads/main.zip)  
🐙 [View on GitHub](https://github.com/Unix69/C_Linux)



<br>
<br>

<a id="build"></a>


## 🛠️ Build

To ***build*** the project generate a **custom** or **standard Doxyfile**:

  A. <b>Custom Doxyfile - Doxygen Script</b>: running the `doxygen.sh` script from the **root directory**;
  
  <pre>
    ./doxygen.sh  
  </pre>

  or by running **GNU Make** with the **build** target:

  <pre>
    make build  
  </pre>

  <br>

  B. <b>Standard Doxyfile - Command Line</b>: Open a terminal into the **root directory** and generate the standard Doxyfile:
       <pre>
       doxygen -g Doxyfile  
       </pre>
  

<br>
<br>

<a id="configuration"></a>

## ⚙️ Configuration

To ***configure*** the C_Linux project you can:

<br>

1. Modify Doxygen's options by:

  A. <b>Doxygen</b>: Changing/Adding manually a row in `./doxygen.ini` before run it again, like:

    <code>
      DOXY_PARAMETER = "DOXY_PARAMETER-VALUE"  
    </code>


  B. <b>Doxyfile</b>: Access the `Doxyfile`, generated by `doxygen.sh` script or run the <pre> doxygen -g Doxyfile</pre> command, then change Doxygen's parameters manually.

2. Modify the default **Makefile** and **make toolchain** to customize and integrate your building behaviour. 

3. You can change the default **Markdown** `.md` files to customize your project **markdown documentation**. The default **Markdown project** of **C_Linux** is structured as follow:

<div id="directory-tree-container" class="directory-tree"></div>


<br>
<br>

<a id="run"></a>

## 🚀 Run

Once the Doxyfile is generated and configured as you wish, to ***make the documentation*** use:

A. <b>Doxygen</b> Open a terminal into the **root directory** and run the doxygen installed tool with your `Doxyfile`;

  <pre>
    doxygen Doxyfile  
  </pre>

B. <b>GNU Make</b>: Open a terminal into the **root directory** and run the gnu make installed tool with your `Makefile` and `doxygen.sh`:
  
  <pre>
    make doc  
  </pre>

<br>

✅ Now you can find the documentation into `./docs/` or at your Doxyfile `OUTPUT_DIRECTORY` path.


<br>
<br>


<a id="uninstall"></a>

## ❌ Uninstall

To ***uninstall*** the project just clean the documentation directory `.e/docs/` and your Doxyfile or use the **GNU Make** tool and run the following command:

  <pre> make clean </pre>

<br>
<br>




<a name="license"></a>

# Licenses 📜

[Table of Contents](#table-of-contents)

<br>


This project is licensed under the <span class="md-link" data-github="LICENSE.md" data-doxygen="md_LICENSE.html">
<a href="LICENSE.md"><b>Creative Commons Attribution 4.0 International License (CC BY 4.0)</b></a>
</span>.

You are free to use, modify, and share this template — just give proper credit to **Giuseppe Pedone**.  

© 2025 Giuseppe Pedone — <span class="md-link" data-github="https://github.com/Unix69" data-doxygen="https://github.com/Unix69">
<a href="https://github.com/Unix69"><b>GitHub: Unix69</b></a>
</span>

<br>
<br>


<a name="contributing"></a>

# Contributing 👋

Thank you for your interest in **C_Linux**!  
You can freely **download and use** the C examples. To contribute, report bugs, or suggest improvements, follow the workflow below.

---

## General Contribution Guidelines

- Read the [**CODE_OF_CONDUCT.md**](CODE_OF_CONDUCT.md)  
- Understand the project structure  
- Ensure required tools are installed: **GCC**, **Make**, **Doxygen**  

When contributing code:

1. Fork the repository  
2. Create a **feature branch** (`git checkout -b feature/your-feature`)  
3. Make changes and commit with clear messages (`git commit -m "Add feature X"`)  
4. Push your branch to GitHub  
5. Open a **Pull Request (PR)**  

Keep style consistent, update documentation, and run tests.

---

<a name="authors"></a>

# Authors 🧑‍💻

<div style="display:flex; flex-direction:column; align-items:center; gap:24px;">

<div style="display:flex; align-items:flex-start; gap:16px;">
  <img src="https://avatars.githubusercontent.com/u/111588387?v=4" alt="Unix69" style="border-radius:50%; width:80px; height:80px;">
  <div>
    <strong>Giuseppe Pedone (Unix69)</strong><br>
    <span>Roles: FO, CEO</span><br>
    <span>Contributions: `FI`, `OP`, `DE`</span><br>
    <span>Email: <a href="mailto:giuseppe.pedone.developer@gmail.com">giuseppe.pedone.developer@gmail.com</a></span><br>
    <span>Links: 
      <a href="https://github.com/Unix69"><img src="Images/Logo/GitHubLogo.svg" width="20" height="20"> GitHub</a>
    </span>
  </div>
</div>

</div>

---

<a name="contact-us"></a>

# Contact ☎️

For questions or support:

- Open a GitHub [Issue](https://github.com/Unix69/C_Linux/issues/new) describing the problem  
- Email the author for direct questions  
- Check [Documentation](docs/html/index.html) for reference  

Issues are preferred to track bugs or feature requests efficiently.

---

<a name="official-links"></a>

# Official Links 🌐

- [GNU C Compiler (GCC)](https://gcc.gnu.org/) – Compiler for C projects  
- [C Programming Language](https://en.wikipedia.org/wiki/C_(programming_language)) – Language reference  
- [Linux OS](https://www.linux.org/) – Target OS for examples  
- [POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/) – Standard APIs  
- [GNU Make](https://www.gnu.org/software/make/) – Build automation  
- [Doxygen](https://www.doxygen.nl/) – Documentation generator  

---

<a name="faq"></a>

# FAQ ❓

**Q1: Which C standard is used?**  
A1: All examples are written in **C99**.

**Q2: Supported OS?**  
A2: **POSIX-compliant systems**, mainly Linux.

**Q3: Can I modify and redistribute examples?**  
A3: Yes! All code is under **[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.html)**.

**Q4: How to compile an example?**  
A4: Use `gcc` or run `make` in project root.

**Q5: How to report a bug?**  
A5: Open a **GitHub Issue** describing the error, affected example, and steps to reproduce.

---

<a name="fork-project"></a>

# Forking & Pull Requests 🔀

### Fork the Project

1. Go to the main repository on GitHub  
2. Click **Fork** to create your personal copy  
3. Create a branch dedicated to your feature: `git checkout -b feature-new-functionality`  
4. Keep it synchronized with the main project

### Pull Requests (PR)

1. Ensure your branch is updated with the main branch  
2. Confirm all tests and checks pass  
3. Open a PR with:
   - Clear title (e.g., "Fix: memory leak in example")  
   - Summary of changes  
   - Related issue numbers (if any)  
4. Wait for maintainers review  
5. Apply requested changes and update PR if needed  

**PR Guidelines**

- Use concise and descriptive titles  
- Include examples or references if relevant  
- Avoid committing unrelated files  

---

<a name="issues"></a>

# Issues ⚠️

- Issues are for reporting bugs, requesting features, or asking questions  
- Use the **[Issue Template](ISSUE_TEMPLATE.md)** if available  
- Clearly describe:
  - Issue type: bug / feature / question  
  - Steps to reproduce  
  - Expected vs actual behavior  
  - Environment: OS, version, configuration  

All issues are tracked in the **Issues** section on GitHub.

---

<a name="thanks"></a>

# Thanks 🙏

Special thanks to the **Open Source Community** for providing tools and frameworks such as **GCC**, **Linux**, **GNU Make**, and **Doxygen**.  
Your work empowers projects like **C_Linux** to exist and evolve.


<br>
<br>


</div>
