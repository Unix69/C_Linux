document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("directory-tree-container");
    if (!container) return;

    // Elimina tutto il contenuto statico presente
    container.innerHTML = "";

    // Ricrea il menu dinamico
    initDirectoryTree("directory-tree-container");

    // Espandere/collassare cartelle
    container.querySelectorAll(".folder").forEach(folder => {
        folder.addEventListener("click", e => {
            e.stopPropagation();
            folder.classList.toggle("expanded");
        });
    });
});

// ======================== FUNZIONI ========================= //

function showPreview(filename, url) {
    fetch(url)
      .then(res => res.text())
      .then(content => {
          const modal = document.createElement("div");
          modal.style.position = "fixed";
          modal.style.top = "0";
          modal.style.left = "0";
          modal.style.width = "100%";
          modal.style.height = "100%";
          modal.style.backgroundColor = "rgba(0,0,0,0.7)";
          modal.style.display = "flex";
          modal.style.alignItems = "center";
          modal.style.justifyContent = "center";
          modal.style.zIndex = "10000";

          const box = document.createElement("pre");
          box.style.background = "#fff";
          box.style.color = "#000";
          box.style.padding = "20px";
          box.style.maxWidth = "90%";
          box.style.maxHeight = "90%";
          box.style.overflow = "auto";
          box.textContent = content;

          modal.addEventListener("click", () => modal.remove());
          box.addEventListener("click", e => e.stopPropagation());

          modal.appendChild(box);
          document.body.appendChild(modal);
      })
      .catch(err => alert("Impossibile caricare il file: " + filename));
}

function initDirectoryTree(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let basePath = "";
    if (window.location.pathname.includes("/docs/html")) {
        basePath = "../../";
    }

    const treeData = [
        { type: "file", name: "README.md", icon: "📝", link: basePath + "docs/html/md_README.html" },
        { type: "file", name: "ISSUE_TEMPLATE.md", icon: "📝", link: basePath + "docs/html/md_ISSUE_TEMPLATE.html" },
        { type: "file", name: "CONTACT_US.md", icon: "☎️", link: basePath + "docs/html/md_CONTACT_US.html" },
        { type: "file", name: "template.css", icon: "🎨", link: basePath + "docs/html/template.css" },
        { type: "file", name: "LICENSE.md", icon: "📜", link: basePath + "docs/html/md_LICENSE.html" },
        { type: "file", name: "CODE_OF_CONDUCT.md", icon: "📝", link: basePath + "docs/html/md_CODE_OF_CONDUCT.html" },
        { type: "file", name: "Makefile", icon: "📄", link: basePath + "Makefile", preview: true },
        { type: "file", name: "Doxyfile", icon: "⚙️", link: basePath + "Doxyfile", preview: true },
        { type: "file", name: "doxygen.sh", icon: "🐚", link: basePath + "doxygen.sh", preview: true },
        { type: "file", name: "DoxygenLayout.xml", icon: "⚙️", link: basePath + "DoxygenLayout.xml" },
        { type: "file", name: "doxygen.ini", icon: "🐚", link: basePath + "doxygen.ini" },
        { type: "file", name: "link.js", icon: "📄", link: basePath + "link.js" },
        { type: "file", name: "directory-tree.js", icon: "🐚", link: basePath + "directory-tree.js" },
        { type: "file", name: "header.html", icon: "📄", link: basePath + "header.html", preview: true },
        { type: "file", name: "footer.html", icon: "📄", link: basePath + "footer.html", preview: true },
        { type: "file", name: "index.html", icon: "📄", link: basePath + "index.html", preview: true },
        { type: "folder", name: "src", icon: "📁", children: [] }
    ];

    function createTree(data) {
        const ul = document.createElement("ul");
        data.forEach(item => {
            const li = document.createElement("li");
            li.className = item.type;
            li.appendChild(document.createTextNode(item.icon + " "));

            if (item.type === "file") {
                const a = document.createElement("a");
                a.textContent = item.name;
                a.href = item.link || "#";
                a.style.cursor = "pointer";

                if (item.preview) {
                    a.addEventListener("click", e => {
                        e.preventDefault();
                        showPreview(item.name, item.link);
                    });
                }

                li.appendChild(a);
            } else if (item.type === "folder") {
                li.appendChild(document.createTextNode(item.name));
                if (item.children && item.children.length > 0) li.appendChild(createTree(item.children));
            }

            ul.appendChild(li);
        });
        return ul;
    }

    container.appendChild(createTree(treeData));
}