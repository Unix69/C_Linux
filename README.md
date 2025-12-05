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

- [Getting Started](#getting-started)
- [Releases](#releases)
- [License](#license)
- [Contributing](#contributing)
  - [Fork Project](#fork-project)
  - [Pull Request](#pull-request)
  - [Issue](#issue)
  - [Code Of Conduct](#code-of-conduct)
- [FAQ](#faq)
- [Authors](#authors)
- [Contacts](#contact-us)
- [Acknowledgements](#acknowledgements)

<br>
<br>

<a id="getting-started"></a>

# Getting Started 🚀

[Table of Contents](#table-of-contents)

Follow these steps to getm, install and set up the project and generate the documentation:

- [**Step 1 - Verify Prerequisites and Dependencies**](#prerequisites)  
C_Linux needs to run on **hosts** equipped with specific **hardware** and **software**.  
So read carefully the **prerequisites** to respect and the **dependencies** to satisfy.

- [**Step 2 - Get and Install**](#installation)  
Get the project package, then follow the **installation procedure** to correctly set up the environment.

- [**Step 3 - Build**](#build)  
Compile the source code and generate executable artifacts according to your **build configuration**.

- [**Step 4 - Setup and Configure**](#configuration)  
Adjust configuration files and system parameters required to **customize** the project behaviour.

- [**Step 5 - Test and Verify**](#tests)  
Execute the **test suite** to validate that the build and configuration were successful.

- [**Step 6 - Run**](#run)  
Start the project using the provided **startup script** or command sequence.

- [**Step 7 - Deploy**](#deployment)  
Deploy the project into its **target environment** following the deployment guidelines.

- [**Step 8 - Uninstall**](#uninstall)  
Remove the project and all its dependencies from the system **safely and completely**.



<br>
<br>

<a id="prerequisites"></a>

## 💻 Prerequisites

Before building or running the project, make sure you satisgy the prerequisites to run the project:

- **Operating System**: GNU/Linux, Windows 
- **Software Dependencies**: GitHub, Doxygen, GNU Make  `

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

To ***configure*** the project follow this setps:

<br>


1. Open your **root directory** and put your code into `./src` directory. 
2. Modify Doxygen's options by:

  A. <b>Doxygen</b>: Changing/Adding manually a row in `./doxygen.ini` before run it again, like:

    <code>
      DOXY_PARAMETER = "DOXY_PARAMETER-VALUE"  
    </code>


  B. <b>Doxyfile</b>: Access the `Doxyfile`, generated by `doxygen.sh` script or run the <pre> doxygen -g Doxyfile</pre> command, then change Doxygen's parameters manually.

3. Modify the default **Makefile** and **make toolchain** to customize and integrate your building behaviour. The default **Makefile** of **C_Linux** is:

      <pre>
        # Makefile for building Doxygen documentation

        # Variables
        DOXYGEN_SH = ./doxygen.sh
        DOXYFILE   = Doxyfile
        DOCS_DIR   = docs
        OUTDIR     = docs/html

        # Default target
        all:
          @echo "Use 'make build' 'make doc' to build C_Linux and generate the documentation for your code!"

        # Build Documentation target
        build:
          @echo "==> Running Doxygen setup script..."
          @$(DOXYGEN_SH)

        # Make Documentation target
        doc:
          @echo "==> Running Doxygen with $(DOXYFILE)..."
          @doxygen $(DOXYFILE)
          @echo "==> Documentation successfully generated in $(DOCS_DIR)/"
          @echo "==> Copying image assets to the HTML output folder..." 
          @cp -R readme/Images $(OUTDIR) 2>/dev/null || true
          @echo "==> Copy completed."

        # Add new targets

        # Clean target
        clean:
          @echo "==> Removing documentation output directory..."
          @rm -rf $(DOCS_DIR)
          @echo "==> Clean completed."


      </pre>
  
4. You can change the default **Markdown** `.md` files to customize your project **markdown documentation**. The default **Markdown project** of **C_Linux** is structured as follow:

<div id="directory-tree-container" class="directory-tree"></div>


<br>
<br>

<a id="tests"></a>

## ✅ Tests

To ***test*** the project follow this setps:

<br>

1. Run the `test.sh` script contained into the **root directory**:
	<pre> sudo ./test.sh </pre>

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

<a id="deployment"></a>

## 🌍 Deployment

Use GitHub to ***deploy*** the project.

<br>
<br>


<a id="uninstall"></a>

## ❌ Uninstall

To ***uninstall*** the project just clean the documentation directory `.e/docs/` and your Doxyfile or use the **GNU Make** tool and run the following command:

  <pre> make clean </pre>

<br>
<br>
<br>


<a name="usage-and-actors"></a>

# Releases ⭐

[Table of Contents](#table-of-contents)

<br>

| 🏷️ Version | 🗓️ Release Date | Status | 📥 Downloads |
| -------- | ----------- | --------- | --------- |
| `v1.0.0` | 14/05/2025 | Stable | [click here](https://github.com/Unix69/README-Template/archive/refs/heads/main.zip) |

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

Thank you for your interest in contributing to this project!  
This guide explains how to collaborate, propose changes, report bugs, and maintain code quality.

<br>


### Table of Contents

1. Forking the Project
2. Pull Requests
3. Issues
4. Code of Conduct


<br>

Everyone is welcome to contribute to this project. Before you start, please make sure that you:

- Have read the CODE_OF_CONDUCT.md file  
- Have installed the required tools, languages, or frameworks  
- Understand the project structure and its main modules  

When adding or modifying code:

1. [**Fork the project**](#fork-project)  
2. Create your **Feature Branch** (`git checkout -b feature/Feature`)  
3. **Commit** your Changes (`git commit -m 'Add some Feature'`)  
4. **Push** to the Branch (`git push origin feature/Feature`)  
5. Open a [**Pull Request**](##pull-request)

- Keep your coding style consistent with the existing one  
- Write clear and descriptive commit messages  
- Update documentation when necessary  
- Run tests to ensure that everything works properly  

<br>

### General Contribution Rules

- Avoid unnecessary changes to unrelated files  
- Clearly explain the purpose of any new feature you add  
- Reference the issue number when fixing a bug  
- Open an issue first if you plan to propose a major or structural change  


<br>

<a name="fork-project"></a>

## 1. Forking the Project

To propose code changes, always work on your personal copy (fork) of the repository.

<a name="how-to-fork"></a> 

### How to Fork the Project

1. Visit the main repository page on GitHub  
2. Select **“Fork”** to create your personal copy  
3. Work on your fork by creating a new branch dedicated to your change (for example: `feature-new-functionality`)  
4. When your work is ready, make sure it is synchronized with the main project version  


<a name="pull-request"></a>

<br>

## 2. Pull Requests

A pull request (PR) is used to propose the integration of your changes into the main repository.

<a name="how-to-make-a-pull-request"></a> 

### How to Open a Pull Request

1. Ensure your branch is up to date with the main project branch  
2. Verify that all tests and checks pass successfully  
3. Create a pull request including:
   - A clear and descriptive title (for example: “Fix: null pointer in login handler”)  
   - A summary of what has been changed or added  
   - Any related issue numbers (for example: “Fixes #12”)  
4. Wait for the maintainers to review your changes  
5. Apply any requested improvements and update your PR accordingly  

### Pull Request Guidelines

- Use concise and meaningful titles  
- Include examples or references if helpful  
- Avoid committing unrelated or unnecessary files  

<br>

## 3. Issues ⚠️

Issues are used to report bugs, suggest new features, or ask questions about the project.

If some ***Issues*** on **C_Linux** occur, the *Actor* can open an issue on GitHub by using the provided <span class="md-link" data-github="ISSUE_TEMPLATE.md" data-doxygen="md_ISSUE_TEMPLATE.html">
        <a href="ISSUE_TEMPLATE.md"><b>Issue template</b></a>
      </span>, or  <span class="md-link" data-github="CONTACT_US.md" data-doxygen="md_CONTACT_US.html">
        <a href="CONTACT_US.md"><b>contact us</b></a>
      </span> directly to signal the issue manually. 

### How to Open an Issue

1. Check whether the issue has already been reported  
2. If it’s new, open an issue in the project’s **Issues** section  
3. Clearly describe:
   - The type of issue (bug, feature request, question, etc.)  
   - The steps to reproduce the problem  
   - The expected vs. actual behaviour  
   - Your environment details (OS, version, configuration, etc.)  

### Issue Tracker

All open and closed issues can be found in the repository’s **Issues** section.  
If the project includes a dedicated file such as `ISSUES.md`, you can refer to it for an up-to-date overview of tracked issues.

<br>

## 4. Code of Conduct

All contributors must follow the rules described in **CODE_OF_CONDUCT.md**.  
Any offensive, discriminatory, or non-constructive behaviour will be handled according to the policies defined in that document.


Thank you for helping improve this project! 🙌

<br>
<br>

<a name="see-also"></a>



<br>
<br>

<a name="faq"></a>


# FAQ ❓

Here you can find the Frequently Asked Questions and Answers.

<br>
<br>

<a name="contact-us"></a>



# Contact us ☎️

For **more information** on C_Linux [**contact us**](md_CONTACT_US.html).

<br>
<br>

<a name="official-links"></a>

# Official Links

[Table of Contents](#table-of-contents)

* [SemVer](https://www.semver.org) – A complete guide to **Semanting Verioning**. 
* [Doxygen](https://www.doxygen.nl/index.html) – **Documentation generator** for source code.
* [GitHub](https://github.com) – **Hosting** and **collaboration platform** for **Git** repositories.
* [Git](https://git-scm.com) – **Version control** system to manage source code.
* [GNU Make](https://www.gnu.org/software/make/) – **Build automation tool** to compile projects.

<br>
<br>

<a name="authors"></a>

# Authors 🧑‍💻

Here you can find **all authors** of C_Linux and their **Contribution & Info** 📝 :

| 👤 Author | 🤝 Contributions | 👥 Roles | Email | ☎️ Telephone | 
|--------|------|---------------|-------|-------|
| [<img src="https://avatars.githubusercontent.com/u/111588387?v=4" width="100px;"/><br/><sub><b>Unix69</b></sub>](https://github.com/Unix69) | `FI`, `OP`, `DE` | `FO` and `CEO` | <a href="giuseppe.pedone.developer@gmail.com">giuseppe.pedone.developer@gmail.com</a> | +3711963527 |

<br>
<br>

💬 Contact them if you have any Questions. 

<br>
<br>


<a name="acknowledgements"></a>

# Acknowledgements

Special thanks to:

* *Open source community*
* *Contributors* of similar templates
* *Libraries and frameworks* that made this project possible

<br>
<br>


</div>
