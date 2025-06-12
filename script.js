 // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Smooth scrolling for navigation links
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            const headerHeight = 80;
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }

        // Enhanced WhatsApp enrollment function
        function enrollNow() {
            const message = "🎨 Hi Kings Creation! I'm excited to enroll in your comprehensive Graphics Design Course (Photoshop + Illustrator + Canva) for 1500 KSH. \n\nCould you please provide me with:\n✅ Course schedule details\n✅ Payment methods\n✅ Start date information\n✅ What I need to prepare\n\nI'm ready to begin my design journey! 🚀";
            const phoneNumber = "254788419041";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }

        // Add click event listeners to navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                scrollToSection(targetId);
                
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });

        // Enhanced Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Enhanced scroll effects
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.style.backgroundColor = 'rgba(30, 58, 138, 0.95)';
                header.style.backdropFilter = 'blur(20px)';
                header.classList.add('shadow-lg');
            } else {
                header.style.backgroundColor = 'rgba(30, 58, 138, 0.1)';
                header.style.backdropFilter = 'blur(15px)';
                header.classList.remove('shadow-lg');
            }

            // Hide/show header on scroll
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            lastScrollTop = scrollTop;
        });

        // Enhanced button ripple effect
        function createRipple(event) {
            const button = event.currentTarget;
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }

        // Add ripple effect and enhanced interactions
        document.querySelectorAll('button').forEach(button => {
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.addEventListener('click', createRipple);
            
            // Enhanced hover effects
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.02)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add loading animations on page load
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            
            // Stagger animations for course cards
            const courseCards = document.querySelectorAll('.hover-lift');
            courseCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });

        // Initialize all animations
        document.addEventListener('DOMContentLoaded', () => {
            // Add initial animation delays
            document.querySelectorAll('.animate-fade-in-up').forEach((el, index) => {
                el.style.animationDelay = `${index * 0.1}s`;
            });
        });