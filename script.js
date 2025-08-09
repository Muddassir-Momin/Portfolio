// Project Data
const projects = [

  {
    id: 1,
    title: "Portfolio Design",
    description: "Creative portfolio design for Showcasing My Professional Life with Projects and contact form",
    longDescription:
      "Designed and developed a stunning portfolio website for Me featuring About Me,Project, client testimonials And contact forms. Built with modern HTML, CSS, and JavaScript.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "design",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://muddassir-momin.github.io/Portfolio/",
    githubUrl: "https://github.com",
    featured: false,
    likes: 25,
    views: 150,
  },
  {
  id: 2,
    title: "Youtube Clone",
    description: "Built a responsive YouTube clone using HTML and CSS, replicating key interface elements with clean design and layout.",
    longDescription:
      "Developed a fully responsive YouTube clone using modern HTML and CSS. The project replicates the layout and visual structure of the original YouTube platform, including a homepage with video thumbnails, navigation sidebar, search bar, and user interface elements. Designed with a focus on pixel-perfect styling, flexible grid layouts, and media queries to ensure cross-device compatibility. This clone serves as a showcase of frontend proficiency in creating real-world UI clones using semantic HTML and advanced CSS techniques.",
    image: " Youtube-logo.jpg ",
    category: "web-app",
    technologies: ["HTML", "CSS","Responsive Design"],
    liveUrl: "https://muddassir-momin.github.io/Youtube-Clone/youtube.html",
    githubUrl: "https://github.com/Muddassir-Momin/Youtube-Clone.git",
    featured: false,
    likes: 27,
    views: 180,
  },
  {
    id: 3,
    title: "Calculator",
    description: "Simple calculator built with HTML, CSS, and JavaScript, handling basic arithmetic with a sleek and responsive design",
    longDescription:
      "Developed an interactive calculator application that handles basic arithmetic operations such as addition, subtraction, multiplication, and division. The project features a clean and responsive user interface styled with CSS for seamless usability across devices. JavaScript powers real-time input handling and ensures accurate calculation logic, including dynamic display updates and error management. This calculator project showcases a solid understanding of DOM manipulation, event handling, and functional programming concepts in JavaScript.",
    image: "Cal.webp",
    category: "web-app",
    technologies: ["HTML", "CSS","JavaScript","Responsive Design"],
    liveUrl: "https://muddassir-momin.github.io/Simple-Calculator/sample-calculator.html",
    githubUrl: "https://github.com/Muddassir-Momin/Simple-Calculator.git",
    featured: false,
    likes: 31,
    views: 245,
  },
  {
    id: 4,
    title: "E-Commerce Platform(Coming soon..)",
    description: "Modern online store with shopping cart, payment system, and admin dashboard",
    longDescription:
      "Built a comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. The platform handles thousands of products and processes hundreds of orders daily using React, Node.js, and MySQL.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    category: "web-app",
    technologies: ["React", "Node.js", "MySQL", "Express.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    likes: 45,
    views: 320,
  },

  {
    id: 5,
    title: "Restaurant Website(Coming soon..)",
    description: "Beautiful restaurant website with online menu and reservation system",
    longDescription:
      "Created a modern restaurant website featuring online menu display, table reservation system, customer reviews, and admin panel for menu management. Built with HTML, CSS, JavaScript, and MySQL backend for reservation management.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    category: "website",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    likes: 29,
    views: 195,
  },
  {
    id: 6,
    title: "Weather Mobile App(Coming soon..)",
    description: "Clean weather app with location-based forecasts and beautiful UI",
    longDescription:
      "Developed a cross-platform mobile weather application with location-based forecasts, weather alerts, and beautiful animated UI. Features include 7-day forecasts, hourly updates, and weather maps integration.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    category: "mobile-app",
    technologies: ["React Native", "JavaScript", "Weather API", "CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    likes: 33,
    views: 210,
  },
  
  
  
]

// Global Variables
let currentFilter = "all"
const likedProjects = new Set()
let isLoading = false

// DOM Elements
const loadingScreen = document.getElementById("loading-screen")
const progressFill = document.getElementById("progress-fill")
const progressPercent = document.getElementById("progress-percent")
const loadingStatus = document.getElementById("loading-status")
const navbar = document.getElementById("navbar")
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const themeToggle = document.getElementById("theme-toggle")
const themeIcon = document.getElementById("theme-icon")
const projectsGrid = document.getElementById("projects-grid")
const contactForm = document.getElementById("contact-form")
const formSuccess = document.getElementById("form-success")
const projectModal = document.getElementById("project-modal")
const modalBody = document.getElementById("modal-body")
const backToTop = document.getElementById("back-to-top")

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  showLoadingScreen()
  setupEventListeners()
  setupScrollAnimations()
  renderProjects()
  setupTheme()
  animateCounters()
  animateSkillBars()
}

// Loading Screen
function showLoadingScreen() {
  let progress = 0
  const statuses = ["Initializing...", "Loading assets...", "Preparing experience...", "Almost ready..."]

  const interval = setInterval(() => {
    progress += Math.random() * 15

    if (progress >= 100) {
      progress = 100
      clearInterval(interval)
      setTimeout(hideLoadingScreen, 500)
    }

    progressFill.style.width = progress + "%"
    progressPercent.textContent = Math.round(progress) + "%"

    // Update status text
    if (progress < 30) {
      loadingStatus.textContent = statuses[0]
    } else if (progress < 60) {
      loadingStatus.textContent = statuses[1]
    } else if (progress < 90) {
      loadingStatus.textContent = statuses[2]
    } else {
      loadingStatus.textContent = statuses[3]
    }
  }, 100)
}

function hideLoadingScreen() {
  loadingScreen.classList.add("hidden")
  document.body.style.overflow = "visible"

  // Trigger entrance animations
  setTimeout(() => {
    triggerScrollAnimations()
  }, 200)
}

// Event Listeners
function setupEventListeners() {
  // Navigation
  window.addEventListener("scroll", handleScroll)
  hamburger.addEventListener("click", toggleMobileMenu)
  themeToggle.addEventListener("click", toggleTheme)

  // Navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const target = link.getAttribute("href")
      scrollToSection(target.substring(1))
      closeMobileMenu()
    })
  })

  // Project filters
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter")
      setActiveFilter(btn, filter)
      filterProjects(filter)
    })
  })

  // Contact form
  contactForm.addEventListener("submit", handleFormSubmit)

  // Close modal on outside click
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal || e.target.classList.contains("modal-overlay")) {
      closeModal()
    }
  })

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal.classList.contains("show")) {
      closeModal()
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        scrollToSection(this.getAttribute("href").substring(1))
      }
    })
  })
}

// Scroll Handling
function handleScroll() {
  const scrolled = window.scrollY > 50
  navbar.classList.toggle("scrolled", scrolled)

  // Show/hide back to top button
  backToTop.classList.toggle("show", window.scrollY > 500)

  // Update active nav link
  updateActiveNavLink()

  // Trigger scroll animations
  triggerScrollAnimations()
}

function updateActiveNavLink() {
  const sections = ["home", "about", "services", "projects", "testimonials", "contact"]
  const navLinks = document.querySelectorAll(".nav-link")

  let currentSection = ""

  sections.forEach((section) => {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = section
      }
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active")
    }
  })
}

// Mobile Menu
function toggleMobileMenu() {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
}

function closeMobileMenu() {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}

// Theme Toggle
function setupTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
  updateThemeIcon(savedTheme)
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)
}

function updateThemeIcon(theme) {
  themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon"
}

// Smooth Scrolling
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Counter Animation
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number")

  const animateCounter = (counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      counter.textContent = Math.floor(current)
    }, 16)
  }

  // Trigger animation when counters come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        observer.unobserve(entry.target)
      }
    })
  })

  counters.forEach((counter) => observer.observe(counter))
}

// Skill Bar Animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress")

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute("data-width")
        entry.target.style.width = width
        observer.unobserve(entry.target)
      }
    })
  })

  skillBars.forEach((bar) => observer.observe(bar))
}

// Scroll Animations
function setupScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-delay") || 0
          setTimeout(() => {
            entry.target.classList.add("active")
          }, delay)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "50px",
    },
  )

  revealElements.forEach((el) => observer.observe(el))
}

function triggerScrollAnimations() {
  // Add reveal classes to elements that should animate
  const elementsToAnimate = [
    ".hero-content > *",
    ".section-header",
    ".service-card",
    ".testimonial-card",
    ".project-card",
  ]

  elementsToAnimate.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      if (
        !el.classList.contains("reveal") &&
        !el.classList.contains("reveal-left") &&
        !el.classList.contains("reveal-right")
      ) {
        el.classList.add("reveal")
        el.style.animationDelay = `${index * 0.1}s`
      }
    })
  })
}

// Projects
function renderProjects() {
  projectsGrid.innerHTML = ""

  const filteredProjects =
    currentFilter === "all" ? projects : projects.filter((project) => project.category === currentFilter)

  filteredProjects.forEach((project, index) => {
    const projectCard = createProjectCard(project)
    projectCard.style.animationDelay = `${index * 0.1}s`
    projectsGrid.appendChild(projectCard)
  })

  // Trigger stagger animation
  setTimeout(() => {
    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.add("fade-in")
    })
  }, 100)
}

function createProjectCard(project) {
  const card = document.createElement("div")
  card.className = "project-card"
  card.onclick = () => openProjectModal(project)

  const isLiked = likedProjects.has(project.id)
  const likeCount = project.likes + (isLiked ? 1 : 0)

  card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="project-overlay">
                <div class="project-actions">
                    <a href="${project.liveUrl}" class="project-btn" target="_blank" rel="noopener" onclick="event.stopPropagation()">
                        <i class="fas fa-external-link-alt"></i>
                        Live Demo
                    </a>
                    <a href="${project.githubUrl}" class="project-btn" target="_blank" rel="noopener" onclick="event.stopPropagation()">
                        <i class="fab fa-github"></i>
                        Code
                    </a>
                </div>
            </div>
        </div>
        <div class="project-content">
            <div class="project-meta">
                <span class="project-category">${getCategoryName(project.category)}</span>
                <div class="project-stats">
                    <div class="project-stat">
                        <i class="fas fa-heart ${isLiked ? "liked" : ""}" onclick="toggleLike(${project.id}, event)"></i>
                        <span>${likeCount}</span>
                    </div>
                    <div class="project-stat">
                        <i class="fas fa-eye"></i>
                        <span>${project.views}</span>
                    </div>
                </div>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies
                  .slice(0, 4)
                  .map((tech) => `<span class="tech-tag">${tech}</span>`)
                  .join("")}
                ${
                  project.technologies.length > 4
                    ? `<span class="tech-tag">+${project.technologies.length - 4}</span>`
                    : ""
                }
            </div>
            <div class="project-links">
                <a href="${project.liveUrl}" class="project-link" target="_blank" rel="noopener" onclick="event.stopPropagation()">
                    <i class="fas fa-external-link-alt"></i>
                    Live Demo
                </a>
                <a href="${project.githubUrl}" class="project-link secondary" target="_blank" rel="noopener" onclick="event.stopPropagation()">
                    <i class="fab fa-github"></i>
                    Code
                </a>
            </div>
        </div>
    `

  return card
}

function getCategoryName(category) {
  const categoryNames = {
    "web-app": "Web App",
    website: "Website",
    "mobile-app": "Mobile App",
    design: "Design",
  }
  return categoryNames[category] || category
}

function setActiveFilter(activeBtn, filter) {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  activeBtn.classList.add("active")
  currentFilter = filter
}

function filterProjects(filter) {
  currentFilter = filter

  // Add fade out animation
  document.querySelectorAll(".project-card").forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
  })

  // Re-render projects after animation
  setTimeout(() => {
    renderProjects()
  }, 300)
}

function toggleLike(projectId, event) {
  event.stopPropagation()

  if (likedProjects.has(projectId)) {
    likedProjects.delete(projectId)
  } else {
    likedProjects.add(projectId)
  }

  // Update the specific project card
  renderProjects()
}

// Project Modal
function openProjectModal(project) {
  const isLiked = likedProjects.has(project.id)
  const likeCount = project.likes + (isLiked ? 1 : 0)

  modalBody.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-overlay">
                <div class="project-actions">
                    <a href="${project.liveUrl}" class="project-btn" target="_blank" rel="noopener">
                        <i class="fas fa-external-link-alt"></i>
                        Live Demo
                    </a>
                    <a href="${project.githubUrl}" class="project-btn" target="_blank" rel="noopener">
                        <i class="fab fa-github"></i>
                        View Code
                    </a>
                </div>
            </div>
        </div>
        <div class="project-content" style="padding: 2rem;">
            <div class="project-meta" style="margin-bottom: 1.5rem;">
                <span class="project-category">${getCategoryName(project.category)}</span>
                ${project.featured ? '<span class="project-category" style="background: #10b981;">Featured</span>' : ""}
            </div>
            <h2 style="font-size: 2rem; margin-bottom: 1rem;">${project.title}</h2>
            <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 2rem;">${project.longDescription}</p>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Technologies Used</h3>
                <div class="project-tech">
                    ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
                </div>
            </div>
            
            <div class="project-links">
                <a href="${project.liveUrl}" class="project-link" target="_blank" rel="noopener">
                    <i class="fas fa-external-link-alt"></i>
                    View Live Project
                </a>
                <a href="${project.githubUrl}" class="project-link secondary" target="_blank" rel="noopener">
                    <i class="fab fa-github"></i>
                    View Source Code
                </a>
            </div>
        </div>
    `

  projectModal.classList.add("show")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  projectModal.classList.remove("show")
  document.body.style.overflow = "visible"
}

// Contact Form
async function handleFormSubmit(e) {
  e.preventDefault()

  if (isLoading) return

  isLoading = true
  const submitBtn = contactForm.querySelector('button[type="submit"]')
  submitBtn.classList.add("loading")

  // Get form data
  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Show success message
  contactForm.classList.add("hidden")
  formSuccess.classList.add("show")

  // Reset form after 5 seconds
  setTimeout(() => {
    resetContactForm()
  }, 5000)
}

function resetContactForm() {
  contactForm.classList.remove("hidden")
  formSuccess.classList.remove("show")
  contactForm.reset()
  const submitBtn = contactForm.querySelector('button[type="submit"]')
  submitBtn.classList.remove("loading")
  isLoading = false
}

// Utility Functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Performance optimization
window.addEventListener("load", () => {
  // Preload images
  projects.forEach((project) => {
    const img = new Image()
    img.src = project.image
  })

  // Initialize lazy loading for images
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img)
    })
  }
})

// Add CSS for liked hearts and animations
const style = document.createElement("style")
style.textContent = `
    .fas.fa-heart.liked {
        color: #ef4444 !important;
    }
    
    .project-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .project-card.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .lazy.loaded {
        opacity: 1;
    }
`
document.head.appendChild(style)

// Add smooth scrolling for older browsers
if (!CSS.supports("scroll-behavior", "smooth")) {
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Error handling
window.addEventListener("error", (e) => {
  console.error("An error occurred:", e.error)
})

// Service Worker Registration (for PWA capabilities)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}
