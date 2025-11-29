// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links (only for same-page anchors, not page links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Skip if it's a page link (starts with /) or external link
    if (anchor.getAttribute('href').startsWith('/') || anchor.getAttribute('href').startsWith('http')) {
        return;
    }
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ROI Calculator Functionality
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-roi');
    const resultsDiv = document.getElementById('roi-results');
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            calculateROI();
        });
    }
    
    function calculateROI() {
        // Get input values
        const currentRevenue = parseFloat(document.getElementById('current-revenue').value) || 0;
        const industry = document.getElementById('industry').value;
        const currentTraffic = parseFloat(document.getElementById('website-traffic').value) || 0;
        const currentConversion = parseFloat(document.getElementById('conversion-rate').value) || 0;
        
        if (currentRevenue === 0) {
            alert('Please enter your current monthly revenue to calculate ROI.');
            return;
        }
        
        // Industry-specific multipliers
        const industryMultipliers = {
            'tech': { traffic: 2.5, conversion: 1.8, revenue: 2.2 },
            'retail': { traffic: 2.0, conversion: 2.5, revenue: 2.8 },
            'healthcare': { traffic: 1.8, conversion: 2.0, revenue: 2.0 },
            'consulting': { traffic: 2.2, conversion: 2.2, revenue: 2.5 },
            'restaurant': { traffic: 2.8, conversion: 2.0, revenue: 2.2 },
            'fitness': { traffic: 2.0, conversion: 2.2, revenue: 2.0 },
            'other': { traffic: 2.0, conversion: 2.0, revenue: 2.0 }
        };
        
        const multipliers = industryMultipliers[industry] || industryMultipliers['other'];
        
        // Calculate improvements
        const trafficIncrease = Math.round(currentTraffic * (multipliers.traffic - 1));
        const newTraffic = currentTraffic + trafficIncrease;
        const newConversion = currentConversion * multipliers.conversion;
        const revenueIncrease = currentRevenue * (multipliers.revenue - 1);
        const newRevenue = currentRevenue + revenueIncrease;
        
        // Calculate ROI
        const websiteCost = 997;
        const aiCost = industry === 'tech' || industry === 'consulting' ? 497 : 0;
        const totalCost = websiteCost + aiCost;
        const annualReturn = revenueIncrease * 12;
        const roiPercentage = totalCost > 0 ? Math.round((annualReturn / totalCost) * 100) : 0;
        
        // Update results
        document.getElementById('revenue-increase').textContent = `$${revenueIncrease.toLocaleString()}`;
        document.getElementById('revenue-percentage').textContent = `+${Math.round((revenueIncrease / currentRevenue) * 100)}%`;
        document.getElementById('traffic-increase').textContent = trafficIncrease.toLocaleString();
        document.getElementById('traffic-percentage').textContent = `+${Math.round((trafficIncrease / currentTraffic) * 100)}%`;
        document.getElementById('new-conversion').textContent = `${newConversion.toFixed(1)}%`;
        document.getElementById('conversion-improvement').textContent = `+${Math.round(((newConversion - currentConversion) / currentConversion) * 100)}%`;
        document.getElementById('roi-percentage').textContent = `${roiPercentage}%`;
        
        // Update investment breakdown
        document.getElementById('website-cost').textContent = `$${websiteCost}`;
        document.getElementById('ai-cost').textContent = `$${aiCost}`;
        document.getElementById('total-cost').textContent = `$${totalCost}`;
        document.getElementById('annual-return').textContent = `$${annualReturn.toLocaleString()}`;
        
        // Show results
        resultsDiv.style.display = 'block';
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    }
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and benefit cards
document.querySelectorAll('.feature-card, .benefit-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add hover effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add click effects to service cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', function() {
        // Add a subtle click effect
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Service section highlighting removed - sections no longer on page

// Add active class styles
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: #00d4ff;
        font-weight: 600;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in effect to hero section
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        hero.style.transition = 'opacity 1s ease, transform 1s ease';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 100);
    
    // Add staggered animation to hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            btn.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 500 + (index * 200));
    });
});
