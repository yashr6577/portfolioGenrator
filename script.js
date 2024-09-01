document.getElementById('portfolioForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const education = document.getElementById('education').value.split(','); // Split education by newlines
    const skills = document.getElementById('skills').value.split(',');
    const projects = document.getElementById('projects').value.split(',');
    const expertise = document.getElementById('expertise').value;
    const description = document.getElementById('description').value;
    const contact = document.getElementById('contact').value;
    const socialLinks = document.getElementById('socialLinks').value.split(',');
    const profileImage = document.getElementById('profileImage').files[0];
    const resume = document.getElementById('resume').files[0];
  
    // Create a new page or section dynamically
    const portfolioWindow = window.open('', '_blank');
    portfolioWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${name}'s Portfolio</title>
        <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                  background: linear-gradient(to top right, #31363F, #0F1035,#49108B);
                  color: #EEEEEE; /* Light Text */
              }
              .navbar {
                  display: flex;
                  justify-content: center;
                  background:none;
                  padding: 10px 0;
                  position: sticky;
                  top: 0;
                  z-index: 1000;
              }
              .navbar a {
                  color: #FFFFFF; /* Primary Color */
                  padding: 14px 20px;
                  text-decoration: none;
                  text-transform: uppercase;
              }
              .navbar a:hover {
                 color: #3572EF;
                 transition: 0.3s;
              }
              section {
                  padding: 40px 20px;
                  height:60vh;
              }
              .header {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  /*background: #31363F; *//* Darker Background */
                  padding: 20px;
                  color: #76ABAE; /* Primary Color */
              }
              .header img {
                  margin-right:125px;
                  max-height: 700px;
                  max-width: 250px;
                  border-radius: 50%;
                  border: 2px solid #76ABAE; /* Primary Border */
              }
              .header .info {
                  flex-grow: 1   
              }
              .header h1{
                  font-size: 28px;
                  max-width: 600px;
                  margin: 10px auto;
                  color: #FFFFFF; /* Primary Color */
              }
              .header h2 {
                  font-size: 26px;
                  max-width: 600px;
                  margin: 10px auto;
                  color: #FFFFFF; /* Primary Color */
              }
              .about-section {
                  text-align: left;
                  padding: 20px;
                  border-radius: 8px;
                  width:100%;
              }
              .about-section p {
                  font-size: 20px;
                  max-width: 600px;
                  margin: 10px auto;
                  line-height: 1.6;
                  color: #EEEDEB; /* Light Text */
              }
              .about-section .header .info a {
                  color: #161b35; 
                  background: #7ecbd9; 
                  padding: 10px 15px; 
                  border-radius: 5px; 
                  text-decoration: none; 
                  max-width: 600px;
                  margin: 10px auto;
              }
              .skills, .projects {
                  display: flex;
                  flex-wrap: wrap;
                  gap: 20px;
                  justify-content: center;
              }
              .skills-section h2{
                 font-size: 32px;
                 text-align: center;
                 font-style:bold;
              }
              .edu-section h2{
                 font-size: 32px;
                 text-align: center;
                 font-style:bold;
              }
              .card {
                  background: #444; /* Darker Background */
                  padding: 15px;
                  border-radius: 15px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  width: calc(30% - 20px);
                  text-align: center;
                  border: 2px solid #76ABAE; /* Primary Border */
                  color: #EEEEEE; /* Light Text */
              }
               .edu-section .timeline {
                    margin: 20px 0;
                    padding-left: 20px;
                    border-left: 4px solid #76ABAE; /* Primary Color */
                    /* Add margin for centering */
                    margin: 0 auto;
                    /* Adjust width to prevent overflow */
                    max-width: 80%;
               }
              .timeline-item {
                  align-items:center;
                  margin-bottom: 20px;
                  padding-left: 10px;
                  position: relative;
                  color: #EEEEEE; /* Light Text */
              }
              .timeline-item::before {
                  content: '';
                  position: absolute;
                  left: -10px;
                  top: 0;
                  width: 20px;
                  height: 20px;
                  background: #76ABAE; /* Primary Color */
                  border-radius: 75%;
              }
              .timeline-item p { 
                 font-size: 26px;
                 margin:5px;
              }  
              footer {
                  margin-top: 10px;
                  background: #31363F; /* Darker Background */
                  color: #76ABAE; /* Primary Color */
                  padding: 20px;
                  text-align: center;
                  border-top: 4px solid #3e6a8b; /* Third Blue Border */
              }
              footer a {
                  color: #7ecbd9; /* Lighter Blue Links */
                  text-decoration: none;
                  margin: 0 10px;
              }
              footer a:hover {
                  text-decoration: underline;
              }
          </style>
      </head>
      <body>
        <div class="navbar">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
  
        </div>
  
        <section id="about" class="about-section">
          <header class="header"> 
            <div class="info">
              <h1>Hi, Iam<br>${name}</h1>
              <h2>I am a ${expertise}</h2>
              <p>${description}<br><br>
                <a href="${URL.createObjectURL(resume)}" download class="download-btn" style="background:linear-gradient(to top right, #DC0083, #4F1787,#4F1787); border-redius:25%; color:#FFFFFF;">Check Resume</a></p>
            </div>
            <img src="${URL.createObjectURL(profileImage)}" alt="Profile Image">
          </header>
        </section>
  
        <section id="skills" class="skills-section">
          <h2>Skills</h2>
          <div class="skills">
            ${skills.map(skill => `
              <div class="card">
                <p>${skill.trim()}</p>
              </div>
            `).join('')}
          </div>
        </section>
  
        <section id="education" class="edu-section">
          <h2>Education</h2>
          <div class="timeline">
            ${education.map(eduItem => `
              <div class="timeline-item">
                <p>${eduItem.trim()}</p>
              </div>
            `).join('')}
          </div>
        </section>
  
        <section id="projects">
          <h2 style="text-align: center;font-size: 32px;font-style:bold;">Projects</h2>
          <div class="projects">
            ${projects.map(project => `
              <div class="card">
                <p>${project.trim()}</p>
              </div>
            `).join('')}
          </div>
        </section>
  
        <footer id="contact">
          <p>Contact: ${contact}</p>
          <div>
            ${socialLinks.map(link => `
              <a href="${link.trim()}" target="_blank">${link.trim()}</a>
            `).join('')}
          </div>
        </footer>
      </body>
      </html>
    `);
  });
  