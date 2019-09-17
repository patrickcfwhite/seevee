import React from 'react';
import "../components/style.css";

const ExistingPage = () => (
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link
          rel="icon"
          href="./favicon.ico"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400,300,700"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" type="text/css" href="./style.css" />
    
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jedd Fenner</title>
      </head>
      <body>
       
        <header>
          <div aria-label="name" class="name-container">
            <a class="name">Jedd Fenner</a>
          </div>
          <div class="infotable">
            <div class="info">
              <div aria-label="contact" class="social">
                <a href="mailto:jf@jedd.pw?subject=Hi%20Jedd!"><br />Email</a>
                <a href="https://github.com/jeddf" target="_blank"><br />GitHub</a>
              </div>
              <a class="bio" aria-label="short biography"
                ><br />Hello! ❤️ I am a software engineer, mostly web.<br />Taught a
                coding bootcamp recently, studied civil engineering not recently.</a
              >
            </div>
          </div>
        </header>
        <main>
         
          <article class="job" aria-label="job">
            <div aria-label="company" class="company">
              <a href="http://diff.uk/">Diff Ltd</a>
            </div>
            <div class="location" aria-label="location">Sheffield, England</div>
            <div class="position position_expand">
              <div class="date" aria-label="dates held">Jan 2019 – Present</div>
              <div class="role" aria-label="position">
                Software Engineering Contractor
              </div>
              <div class="desc" aria-label="description">
                ...providing modern javascript engineering expertise on a contract
                basis, helping teams find a happy, productive workflow.<br /><br /><span
                  aria-label="skills"
                  ><a>Javascript</a><a>React</a></span
                >
              </div>
            </div>
          </article>
          
          <article class="job" aria-label="job">
            <div aria-label="company" class="company">
              <a href="http://datahoist.com/">Datahoist</a>
            </div>
            <div class="location" aria-label="location">Sheffield, England</div>
            <div class="position position_expand">
              <div class="date" aria-label="dates held">May 2018 – Jan 2019</div>
              <div class="role" aria-label="position">
                Software Engineering Manager
              </div>
              <div class="desc" aria-label="description">
                ...building a robust cloud platform and proprietary hardware device
                for the Internet of Elevators! An IoT solution for remote monitoring
                that works with all elevator systems.<br /><br /><span
                  aria-label="skills"
                  ><a>Project Management</a><a>Cloud Architecture</a
                  ><a>Javascript</a><a>Serverless</a><a>Microsoft Azure</a
                  ><a>Node.js</a><a>React</a></span
                >
              </div>
            </div>
          </article>
          <article class="job" aria-label="job">
            <div aria-label="company" class="company">
              <a href="https://stream.me/">StreamMe</a>
            </div>
            <div class="location" aria-label="location">Austin, Texas</div>
            <div class="position position_expand">
              <div class="date" aria-label="dates held">
                August 2017 – June 2018
              </div>
              <div class="role" aria-label="position">Fullstack Engineer</div>
              <div class="desc" aria-label="description">
                ...helping to build a live video streaming community.<br /><br /><span
                  aria-label="skills"
                  ><a>React</a><a>Redux</a><a>Sass</a><a>Node.js</a><a>Go</a
                  ><a>Git</a><a>CD</a></span
                >
              </div>
            </div>
          </article>
          
          <article class="job" aria-label="job">
            <div aria-label="company" class="company">
              <a href="https://www.codingbootcamputaustin.com/"
                >Coding Boot Camp At UT Austin</a
              >
            </div>
            <div class="location" aria-label="location">Austin, Texas</div>
            <div class="position">
              <div class="date" aria-label="dates held">May 2017 – Feb 2018</div>
              <div class="role" aria-label="position">Instructor (Part-time)</div>
            </div>
            <div class="position position_expand">
              <div class="date" aria-label="dates held">Jul 2016 – Feb 2017</div>
              <div class="role" aria-label="position">
                Teaching Assistant (Part-time)
              </div>
              <div class="desc" aria-label="description">
                ...focusing on the MERN stack as well as introducing many other web
                technologies and computer science fundamentals. The Coding Boot Camp
                at UT Austin is a competitive, 24-week full stack development
                program that trains students to become web developers.
              </div>
            </div>
          </article>
          
          <article class="job" aria-label="job">
            <div aria-label="company" class="company">
              <a href="https://serenova.com/">Serenova</a>
            </div>
            <div class="location" aria-label="location">Austin, Texas</div>
            <div class="position position_expand">
              <div class="date" aria-label="dates held">
                November 2016 – July 2017
              </div>
              <div class="role" aria-label="position">Frontend Engineer</div>
              <div class="desc" aria-label="description">
                ...at a leading cloud call-center-as-a-service company, standing
                alone in the industry with a true AWS infrastructure.<br /><br /><span
                  aria-label="skills"
                  ><a>React</a><a>Redux</a><a>Webpack</a><a>Radium</a><a>CSS</a
                  ><a>Git</a><a>Agile</a></span
                >
              </div>
            </div>
          </article>
        
          <article class="job" aria-label="job">
            <div aria-label="company" class="company">
              <a href="https://q1media.com/">Q1Media</a>
            </div>
            <div class="location" aria-label="location">Austin, Texas</div>
            <div class="position position_expand">
              <div class="date" aria-label="dates held">
                May 2015 – November 2016
              </div>
              <div class="role" aria-label="position">Web Developer</div>
              <div class="desc" aria-label="description">
                ...working as part of a small agile team to maintain and iterate a
                complex Angular dashboard, a dynamic Javascript ad tag, and a
                MongoDB backed Node api with many custom 3rd party api integrations.
                Q1Media has been growing since 2004 in the data driven, fast paced
                world of Ad Tech. <br /><br /><span aria-label="skills"
                  ><a>Node.js</a><a>Express</a><a>MongoDB</a><a>Angular</a
                  ><a>Linux</a><a>CSS</a><a>Agile</a><a>Git</a></span
                >
              </div>
            </div>
          </article>
       
          <article class="job" aria-label="job">
            <div aria-label="company" class="company">
              <a href="http://jeddfenner.com/">Freelance</a>
            </div>
            <div class="location" aria-label="location">Austin, Texas</div>
            <div class="position position_expand">
              <div class="date" aria-label="dates held">May 2014 – May 2015</div>
              <div class="role" aria-label="position">Software Engineer</div>
              <div class="desc" aria-label="description">
                ...architecting and implementing web applications for startups,
                projects included complex OO Python data processing layers and a
                full stack realtime graphing app. <br /><br /><span
                  aria-label="skills"
                  ><a>Python</a><a>Angular</a><a>Node</a><a>Linux</a><a>AWS</a
                  ><a>HTML/CSS</a><a>D3.js</a><a>Redis</a><a>MongoDB</a
                  ><a>IoT</a></span
                >
              </div>
            </div>
          </article>
      
          <article class="job" aria-label="job">
            <div aria-label="company" class="company">
              <a
                href="https://beta.companieshouse.gov.uk/company/05650173"
                target="_blank"
                >Kierbeck Thames Ltd</a
              >
            </div>
            <div class="location" aria-label="location">London, England</div>
            <div class="position position_expand">
              <div class="date" aria-label="dates held">Dec 2011 – Mar 2013</div>
              <div class="role" aria-label="position">Prefabrication Estimator</div>
              <div class="desc" aria-label="description">
                …receiving &amp; pricing enquiries and managing active projects at
                the only steel reinforcement fabricator in Greater London,
                specialising in huge pile cages! Note: company was dissolved in
                October 2017<br /><br /><span aria-label="skills"
                  ><a>Pricing</a><a>Estimation</a><a>Sales</a><a>Bidding</a
                  ><a>Process Management</a><a>Technical Drawing</a
                  ><a>Excel Computation</a><a>Client Management</a><a>Logistics</a
                  ><a>Steel</a></span
                >
              </div>
            </div>
          </article>
       
          <article class="job" aria-label="degree">
            <div aria-label="university" class="company">
              <a href="http://www.eng.brad.ac.uk/" target="_blank"
                >The University of Bradford</a
              >
            </div>
            <div class="location" aria-label="location">Bradford, England</div>
            <div class="position position_expand">
              <div class="date" aria-label="dates studied">
                Sept 2010 – Dec 2011
              </div>
              <div class="role" aria-label="position" aria-label="course">
                M.Sc. Civil and Structural Engineering (Honours)
              </div>
              <div class="desc" aria-label="description">
                <strong>Research: </strong>Fluvial Sediment transport; developing a
                particle model in Matlab software from first principles to
                scrutinise the characteristics of bed load transport.
                <div class="mods">
                  <strong id="msc-modules">Selected Modules:</strong>
                  <ul aria-labelledby="msc-modules">
                    <li>Advanced Numerical Methods</li>
                    <li>Computational Fluid Dynamics</li>
                    <li>Advanced Structural Analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        
          <article class="job" aria-label="degree">
            <div aria-label="university" class="company">
              <a href="http://www.eng.brad.ac.uk/" target="_blank"
                >The University of Bradford</a
              >
            </div>
            <div class="location" aria-label="location">Bradford, England</div>
            <div class="position position_expand">
              <div class="date" aria-label="dates studied">
                Sept 2007 – June 2010
              </div>
              <div class="role" aria-label="position" aria-label="course">
                B.Eng. Civil and Structural Engineering (Honours – 2:2)
              </div>
              <div class="desc" aria-label="description">
                <strong>Research:</strong>Developing a mathematical model for
                classifying the geometry of the particles and their matrix in mixed
                concrete.
                <div class="mods">
                  <strong id="beng-modules">Selected Modules:</strong>
                  <ul aria-labelledby="beng-modules">
                    <li>Computer Modelling Techniques</li>
                    <li>Engineering Statistics</li>
                    <li>Information Technology</li>
                    <li>Further Engineering Mathematics</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </main>
      </body>
    </html>
  )
  
  export default ExistingPage