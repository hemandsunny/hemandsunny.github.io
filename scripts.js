$(document).ready(function() {
    const apiURL = 'https://hemand11.pythonanywhere.com/api'; // Adjust URL if needed
  
    // Function to fetch and display content for a specific tab
    function loadTabContent(tabName) {
      $.get(apiURL + '/' + tabName, function(data) {
        let content = '';
  
        // Generate content based on the tab
        if (tabName === 'projects') {
          content += `<h2>Projects</h2><br>`;
          content += `<div class="row">`;
          data.forEach(service => {
            content += `
              <div class="col-lg-4 mb-4 text-justify">
                <div>
                  
                    <h5>${service.title}</h5>
                    <p>${service.description}</p>

                </div>
              </div>`;
          });
          content += `</div>`;
        } else if (tabName === 'about') {
          content += `<h2>About </h2><br>`;
          content += `<p>${data.about}</p>`;
        } else if (tabName === 'contact') {
          content += `<h2>Contact </h2><br>`;
          content += `<p>Email: ${data.email}</p>`;
            content += `<p>${data.GitHub}</p>`;
            content += `<p>${data.LinkedIn}</p>`;
            content += `<p>${data.X}</p>`;
          //content += `<p>Phone: ${data.phone}</p>`;
        } else {
          content += `<h2>Hi, I am Hemand.</h2>`;
          content += `<p>doing random stuffs , jump in.</p>`;
        }
  
        // Fade out current content
        $('#tab-content').removeClass('fade-in');
  
        // Update tab content after fade out
        setTimeout(function() {
          $('#tab-content').html(content);
          $('#tab-content').addClass('fade-in');
        }, 150); // Ensure content changes after fade-out transition (0.15s)
  
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
  
