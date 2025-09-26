// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Animate skill bars when they come into view
    const skillLevels = document.querySelectorAll('.skill-level');
    
    const animateSkillBars = () => {
        skillLevels.forEach(skill => {
            const width = skill.getAttribute('data-width');
            skill.style.width = width;
        });
    };
    
    // Intersection Observer for skill bars
    const skillSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(skillSection);
            }
        });
    }, { threshold: 0.5 });
    
    if (skillSection) {
        observer.observe(skillSection);
    }
    
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Add terminal input functionality
    const terminalInput = document.querySelector('.terminal-input-field');
    
    if (terminalInput) {
        terminalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const message = terminalInput.value.trim();
                if (message) {
                    // In a real implementation, you would send this message to a server
                    console.log('Message sent:', message);
                    terminalInput.value = '';
                    
                    // Show a confirmation message
                    const confirmation = document.createElement('div');
                    confirmation.className = 'terminal-output';
                    confirmation.innerHTML = `
                        <div class="terminal-header">
                            <span class="terminal-prompt">system@cyberworld:~$ </span>
                            <span class="terminal-response">Message sent successfully!</span>
                        </div>
                    `;
                    
                    terminalInput.closest('.terminal-content').appendChild(confirmation);
                    
                    // Scroll to the bottom
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
    
    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.terminal-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add a subtle animation to the header on load
    const header = document.querySelector('header');
    if (header) {
        setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 500);
    }
});