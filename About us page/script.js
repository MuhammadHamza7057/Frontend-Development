// JavaScript to add more interactive animations or triggers

document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');
    
    // Adding a delay animation effect when the team members appear on the page
    teamMembers.forEach((member, index) => {
      member.style.animation = `fadeIn 1.5s ease-in-out ${index * 0.2}s forwards`;
    });
  
    // Adding smooth scroll to anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });
  