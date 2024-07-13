$(document).ready(function() {
    const apiURL = 'hemand11.pythonanywhere.com/api'; // Adjust URL if needed
  
    // Function to fetch and display content for a specific tab
    function loadTabContent(tabName) {
      $.get(apiURL + '/' + tabName, function(data) {
        let content = '';
  
        // Generate content based on the tab
        if (tabName === 'services') {
          content += `<h2>Our Services</h2>`;
          content += `<div class="row">`;
          data.forEach(service => {
            content += `
              <div class="col-lg-4 mb-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${service.title}</h5>
                    <p class="card-text">${service.description}</p>
                  </div>
                </div>
              </div>`;
          });
          content += `</div>`;
        } else if (tabName === 'about') {
          content += `<h2>About Us</h2>`;
          content += `<p>${data.about}</p>`;
        } else if (tabName === 'contact') {
          content += `<h2>Contact Us</h2>`;
          content += `<p>Email: ${data.email}</p>`;
          content += `<p>Phone: ${data.phone}</p>`;
        } else {
          content += `<h2>Welcome to VizReLabs</h2>`;
          content += `<p>Innovative Solutions for Modern Problems</p>`;
        }
  
        // Fade out current content
        $('#tab-content').removeClass('fade-in');
  
        // Update tab content after fade out
        setTimeout(function() {
          $('#tab-content').html(content);
          $('#tab-content').addClass('fade-in');
        }, 300); // Ensure content changes after fade-out transition (0.3s)
  
      });
    }
  
    // Load default tab content on page load
    loadTabContent('home');
  
    // Handle navbar tab clicks
    $('.nav-link').click(function(e) {
      e.preventDefault();
      let tabName = $(this).attr('href').substring(1);
      loadTabContent(tabName);
    });
  });
  
