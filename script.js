 // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            body.classList.toggle('dark-mode');
            
            // Save theme preference to localStorage
            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
        });
        
        // Check for saved theme preference
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        if (savedDarkMode) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        }
        
        // Animation timeline
        const tl = gsap.timeline();
        
        // Initial setup
        gsap.set('#character', {x: -200});
        gsap.set('#bag', {rotation: 0});
        gsap.set('#loginForm', {scale: 0, opacity: 0});
        
        // Animation sequence
        tl.to('#character', {
            x: 300,
            duration: 2,
            ease: "power2.inOut"
        })
        .to('.arm-left', {
            rotation: -30,
            duration: 0.3,
            ease: "power2.inOut"
        }, "-=0.5")
        .to('.arm-right', {
            rotation: 30,
            duration: 0.3,
            ease: "power2.inOut"
        }, "-=0.5")
        .to('#bag', {
            y: 100,
            rotation: -10,
            duration: 0.5,
            ease: "power2.inOut"
        })
        .to('#loginForm', {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
        })
        .to('#character', {
            x: 50,
            duration: 0.5,
            ease: "power2.inOut"
        }, "-=0.5")
        .to('.arm-left', {
            rotation: 0,
            duration: 0.3,
            ease: "power2.inOut"
        }, "-=0.3")
        .to('.arm-right', {
            rotation: 0,
            duration: 0.3,
            ease: "power2.inOut"
        }, "-=0.3");
        
        // Form submission
        document.getElementById('loginFormElement').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (username && password) {
                // Add loading animation to button
                const button = document.querySelector('.login-btn');
                button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
                button.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-check"></i> Success!';
                    button.style.background = 'linear-gradient(to right, #4CAF50, #45a049)';
                    
                    // Reset after a delay
                    setTimeout(() => {
                        button.innerHTML = 'Sign In';
                        button.disabled = false;
                        button.style.background = 'linear-gradient(to right, var(--primary-color), var(--secondary-color))';
                    }, 2000);
                }, 1500);
            }
        });
        
        // Add hover effects to form inputs
        const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
        inputs.forEach(input => {
            input.addEventListener('mouseenter', () => {
                gsap.to(input, {scale: 1.02, duration: 0.2});
            });
            
            input.addEventListener('mouseleave', () => {
                gsap.to(input, {scale: 1, duration: 0.2});
            });
        });