// ================= YEAR =================
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ================= THEME =================
const themeButton = document.getElementById("themeToggle");
const htmlTag = document.documentElement;

function updateThemeButton(theme) {
    if (themeButton) {
        themeButton.textContent = theme === "dark" ? "☀️" : "🌙";
    }
}

const savedTheme = localStorage.getItem("theme") || "light";
htmlTag.setAttribute("data-theme", savedTheme);
updateThemeButton(savedTheme);

if (themeButton) {
    themeButton.addEventListener("click", () => {
        const currentTheme = htmlTag.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        htmlTag.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeButton(newTheme);
    });
}

// ================= FORM VALIDATION =================
const contactForm = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

function showStatus(message, color) {
    if (!statusText) return;
    statusText.textContent = message;
    statusText.style.color = color;

    setTimeout(() => {
        statusText.textContent = "";
    }, 4000);
}

// ✅ Improved email validation (fix from grading feedback)
function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return pattern.test(email);
}

if (contactForm && statusText) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            showStatus("⚠️ Please fill in all fields.", "crimson");
            return;
        }

        if (!isValidEmail(email)) {
            showStatus("⚠️ Invalid email format (example: name@email.com)", "orange");
            return;
        }

        if (message.length < 10) {
            showStatus("⚠️ Message must be at least 10 characters.", "orange");
            return;
        }

        showStatus("✅ Message sent successfully!", "green");
        contactForm.reset();
    });
}

// ================= PROJECT FILTER =================
const filterButtons = document.querySelectorAll(".filter-btn");
const projectsGrid = document.getElementById("projectsGrid");
const sortProjects = document.getElementById("sortProjects");
const emptyMessage = document.getElementById("emptyMessage");

let currentFilter = "all";
let defaultOrder = [];

function getProjectCards() {
    return Array.from(projectsGrid.querySelectorAll(".project-card"));
}

function applyFilterAndSort() {
    const cards = getProjectCards();

    cards.forEach(card => {
        const category = card.getAttribute("data-category");
        const matches = currentFilter === "all" || category === currentFilter;
        card.style.display = matches ? "block" : "none";
    });

    const visibleCards = cards.filter(card => card.style.display !== "none");
    const sortValue = sortProjects ? sortProjects.value : "default";

    if (sortValue === "default") {
        visibleCards.sort((a, b) =>
            defaultOrder.indexOf(a) - defaultOrder.indexOf(b)
        );
    } else {
        visibleCards.sort((a, b) => {
            const nameA = a.dataset.name.toLowerCase();
            const nameB = b.dataset.name.toLowerCase();
            const dateA = new Date(a.dataset.date);
            const dateB = new Date(b.dataset.date);

            if (sortValue === "name-asc") return nameA.localeCompare(nameB);
            if (sortValue === "name-desc") return nameB.localeCompare(nameA);
            if (sortValue === "date-new") return dateB - dateA;
            if (sortValue === "date-old") return dateA - dateB;

            return 0;
        });
    }

    visibleCards.forEach(card => projectsGrid.appendChild(card));

    if (emptyMessage) {
        emptyMessage.style.display = visibleCards.length === 0 ? "block" : "none";
    }
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        applyFilterAndSort();
    });
});

if (sortProjects) {
    sortProjects.addEventListener("change", applyFilterAndSort);
}

// ================= PERSONALIZATION =================
const welcomeMessage = document.getElementById("welcomeMessage");
let savedVisitorName = localStorage.getItem("visitorName");

if (!savedVisitorName) {
    savedVisitorName = prompt("Enter your name for a personalized welcome:");
    if (savedVisitorName) {
        localStorage.setItem("visitorName", savedVisitorName);
    }
}

if (welcomeMessage && savedVisitorName) {
    welcomeMessage.textContent = `Welcome back, ${savedVisitorName}!`;
}

// ================= TIMER =================
const visitTimer = document.getElementById("visitTimer");
let secondsOnSite = 0;

setInterval(() => {
    secondsOnSite++;
    if (visitTimer) {
        visitTimer.textContent = `⏱ Time on site: ${secondsOnSite}s`;
    }
}, 1000);

// ================= GITHUB API =================
const githubStatus = document.getElementById("githubStatus");

function createGitHubCard(repo) {
    const article = document.createElement("article");
    article.className = "card project-card";
    article.dataset.category = "github";
    article.dataset.name = repo.name;
    article.dataset.date = repo.updated_at;

    article.innerHTML = `
        <div class="project-body">
            <div class="project-top">
                <span class="project-tag">GitHub</span>
                <span class="project-date">${new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
            <h3>${repo.name}</h3>
            <p class="muted">${repo.description || "No description available."}</p>
            <div class="project-links">
                <a class="link" href="${repo.html_url}" target="_blank">View Repo</a>
            </div>
        </div>
    `;

    return article;
}

fetch("https://api.github.com/users/Zahraaalmadeh/repos")
    .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
    })
    .then(repos => {
        githubStatus.textContent = "GitHub repositories loaded successfully.";

        repos.slice(0, 3).forEach(repo => {
            const card = createGitHubCard(repo);
            projectsGrid.appendChild(card);
        });

        defaultOrder = getProjectCards();
        applyFilterAndSort();
    })
    .catch(() => {
        githubStatus.textContent = "Unable to load GitHub repositories.";
        githubStatus.style.color = "crimson";
    });

defaultOrder = getProjectCards();
applyFilterAndSort();