// Content for each section
const content = {
    home: `
        <section class="text-center text-dark d-flex justify-content-center align-items-center">
            <div>
                <h1>Welcome!</h1>
                <p>Join me on my journey as I learn, share experiences, and explore the exciting realms of Robotics and AI, driven by a passion to innovate in these fields.</p>
                <a href="#" class="btn btn-primary" onclick="loadContent('services')">Explore Projects</a>
            </div>
        </section>
    `,
    about: `
        <section id="about" class="py-5">
            <div class="container">
                <h2 class="text-center">About</h2>
                <p class="text-center">Deep Dynamix was founded with a mission to revolutionize industries through the power of robotics and AI. Our team of experts combines deep technical knowledge with a passion for innovation, delivering solutions that drive success for our clients.</p>
            </div>
        </section>
    `,
    services: `
        <section id="services" class="py-5">
            <div class="container">
                <h2 class="text-center"> Projects</h2>
                <div class="row">
                    <div class="col-md-4">
                        <h3>Robotics</h3>
                        <p>Our robotics services include design, development, and deployment of advanced robotic systems tailored to meet the unique needs of each client. From automation to autonomous navigation, we cover all aspects of robotics technology.</p>
                    </div>
                    <div class="col-md-4">
                        <h3>AI Development</h3>
                        <p>AI-driven solutions and expertise areas include machine learning, natural language processing, and predictive analytics. We help businesses harness the power of AI to drive efficiency and innovation.</p>
                    </div>
                    <div class="col-md-4">
                        <h3>Computer Vision</h3>
                        <p>Services related to computer vision, including applications in quality control, surveillance, and automation. Our expertise in image processing and pattern recognition helps businesses gain deeper insights.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    blog: `
        <section id="blog" class="py-5 bg-light">
            <div class="container">
                <h2 class="text-center">Blog</h2>
                <div class="row">
                    <div class="col-md-4">
                        <h3>The Future of Robotics: Trends to Watch in 2024</h3>
                        <p>As we move into 2024, several key trends in robotics are poised to reshape industries and drive innovation. In this article, we explore the top trends to watch.</p>
                    </div>
                    <!-- Add more blog posts as needed -->
                </div>
            </div>
        </section>
    `,
    contact: `
        <section id="contact" class="py-5">
            <div class="container">
                <h2 class="text-center">Contact </h2>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Your Name">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Your Email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    `
};

// Function to load content with smooth transitions
function loadContent(section) {
    const contentContainer = document.getElementById('content');
    contentContainer.classList.add('fade-out');
    setTimeout(() => {
        contentContainer.innerHTML = content[section];
        contentContainer.classList.remove('fade-out');
        contentContainer.classList.add('fade-in');
        setTimeout(() => {
            contentContainer.classList.remove('fade-in');
        }, 300);
    }, 300);
}

// Load the default content (Home)
document.addEventListener('DOMContentLoaded', function() {
    loadContent('home');
});
