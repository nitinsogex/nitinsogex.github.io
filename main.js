const featuresList = [
  {
    icon: "images/create-task-icon.svg",
    title: "Intuitive Task Creation",
    description:
      "Easily create and manage tasks with a simple and user-friendly interface.",
  },

  {
    icon: "images/reminders-icon.svg",
    title: "Smart Reminders",
    description:
      "Set reminders to ensure you never miss an important deadline.",
  },

  {
    icon: "images/collaborations-icon.svg",
    title: "Collaboration Tools",
    description:
      "Collaborate with team members, assign tasks, and track progress together.",
  },

  {
    icon: "images/progress-icon.svg",
    title: "Progress Tracking",
    description:
      "Monitor your progress, track completed tasks, and stay motivated.",
  },

  {
    icon: "images/deadline-icon.svg",
    title: "Deadline Management",
    description:
      "Set due dates and track deadlines to stay on top of your commitments.",
  },

  {
    icon: "images/file-icon.svg",
    title: "File Attachments",
    description:
      "Attach files to tasks for seamless collaboration and easy access.",
  },
];

const testimonialsList = [
  {
    review:
      "Since I started using the app, my productivity has skyrocketed. The reminder feature keeps me on track and ensures that I never miss an important task or deadline. Highly recommended!",
    image: "images/testimonial1.png",
    name: "John Smith",
    designation: "Tech Lead, Amazon",
  },
  {
    review:
      "This app has completely changed the way I manage my tasks. The advanced features and intuitive interface make it a joy to use. I can't imagine my work life without it!",
    image: "images/testimonial2.png",
    name: "Sarah Johnson",
    designation: "Product Manager, Google",
  },
  {
    review:
      "I've tried several task management apps, but this one takes the cake. The customizable workflows and seamless collaboration features have greatly improved my team's efficiency.",
    image: "images/testimonial3.png",
    name: "Emily Davis",
    designation: "Project Manager, Microsoft",
  },
];

const plans = [
  {
    name: "Basic",
    features: [
      "50 Tasks",
      "Deadline Tracking",
      "Priority Settings",
      "Basic Reporting",
      "Email Notifications",
      "24/7 Customer Support",
    ],
    price: "Free",
    link: "#",
  },

  {
    name: "Pro",
    features: [
      "All from <strong>Basic</strong> plan",
      "Advanced Tasks",
      "Subtasks",
      "File Attachments",
      "Gantt Chart View",
      "Collaborations",
    ],
    price: "$29.99",
    link: "#",
  },

  {
    name: "Enterprise",
    features: [
      "All from <strong>Pro</strong> plan",
      "Custom Branding",
      "API Access",
      "Data Export",
      "Advanced Security",
      "Custom Integrations",
    ],
    price: "Contact for pricing",
    link: "#",
  },
];

const featuresContent = document.querySelector("#features .content");
const testimonialCard = document.querySelector(
  "#testimonials .testimonial-card"
);
const prevBtn = document.querySelector("#testimonials .prev-btn");
const nextBtn = document.querySelector("#testimonials .next-btn");
const pricingContent = document.querySelector("#pricing .content");
const menuButton = document.querySelector(".menu-btn");
const mobileNavMenu = document.querySelector("#menu");
const navLinks = document.querySelectorAll(".nav-link");
let currentTestimonialIndex = 0;

const displayFeatures = () => {
  if (!featuresContent) return;
  featuresList.forEach((f) => {
    const html = `<div class="icon">
        <img src="${f.icon}" alt="" />
      </div>
      <h3>${f.title}</h3>
      <p>
        ${f.description}
      </p>`;

    const featureCard = document.createElement("div");
    featureCard.classList.add("feature-card");
    featureCard.innerHTML = html;

    featuresContent.appendChild(featureCard);
  });
};

displayFeatures();

const displayTestimonial = () => {
  if (!testimonialCard) return;
  const html = `<span class="quote-icon">
  <img src="images/quote-icon.svg" alt="" />
</span>

<p class="review">
 ${testimonialsList[currentTestimonialIndex].review}
</p>

<div class="reviewer-info">
  <div class="image">
    <img src="${testimonialsList[currentTestimonialIndex].image}" alt="" />
  </div>

  <div class="details">
    <div class="name">${testimonialsList[currentTestimonialIndex].name}</div>
    <div class="designation">${testimonialsList[currentTestimonialIndex].designation}</div>
  </div>
</div>`;

  testimonialCard.innerHTML = html;
  testimonialCard.classList.add("active");
};

displayTestimonial();

if (nextBtn && testimonialCard) {
  nextBtn.addEventListener("click", () => {
    testimonialCard.classList.remove("active");

    setTimeout(() => {
      currentTestimonialIndex++;
      if (currentTestimonialIndex >= testimonialsList.length) {
        currentTestimonialIndex = 0;
      }
      displayTestimonial();
    }, 200);
  });
}

if (prevBtn && testimonialCard) {
  prevBtn.addEventListener("click", () => {
    testimonialCard.classList.remove("active");

    setTimeout(() => {
      currentTestimonialIndex--;
      if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonialsList.length - 1;
      }
      displayTestimonial();
    }, 200);
  });
}

const displayPricing = () => {
  if (!pricingContent) return;
  plans.forEach((p) => {
    const featuresHTML = p.features
      .map(
        (f) =>
          `<li><span class='icon'><img src='images/check-icon.svg'/></span>${f}</li>`
      )
      .join("");

    const html = `<h4 class="plan-name">${p.name}</h4>
    <ul class="plan-features">
      ${featuresHTML}
    </ul>
    <div class="plan-price">${p.price}</div>
    <a href="${p.link}" class="btn">Choose</a>`;

    const plan = document.createElement("div");
    plan.classList.add("plan");
    plan.innerHTML = html;

    pricingContent.appendChild(plan);
  });
};

displayPricing();

if (menuButton && mobileNavMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileNavMenu.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    mobileNavMenu.setAttribute("aria-hidden", isOpen ? "false" : "true");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement && typeof targetElement.scrollIntoView === "function") {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (mobileNavMenu) {
      mobileNavMenu.classList.remove("active");
      menuButton?.setAttribute("aria-expanded", "false");
      mobileNavMenu.setAttribute("aria-hidden", "true");
    }
  });
});

// Typed.js init
window.addEventListener("DOMContentLoaded", () => {
  if (window.Typed) {
    const target = document.querySelector("#typed");
    if (target) {
      new Typed("#typed", {
        strings: [
          "Learner",
          "Python Developer",
          "Java Programmer",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1200,
        startDelay: 300,
        loop: true,
        smartBackspace: true,
        showCursor: true,
        cursorChar: "|",
      });
    }
  }
});