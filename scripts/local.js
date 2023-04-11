// We can have as many locales here as we want, 
// and use any locales we want. We have English
// and Arabic as locales here as examples.
const translations = {
    // English translations
    "en": {
      "profile-bio": 'Software engineer, CEO and Founder at <a href="https://www.bproodev.com/" target="_blank">Bproo Dev</a>, <a href="https://www.youtube.com/c/BprooDev1" target="_blank">YouTuber</a> with 5k+ subs, full-stack developer, instructor and freelancer.',
      "skills-qualification": "Skills & Qualifications",
      "sq-1": '✔️ 8 Years experience with frontend & backend development',
      "sq-2": '✔️ Good knowledge in API & Database Design.',
      "sq-3": '✔️ Experienced content creator on YouTube & community leader',
      "sq-4": '✔️ 5 Years experience with teaching and training developers',
      "tech-stack": "Tech stack",
      "work-history": "Work History",
      "exp-1": `<strong>🐤 System Administrator | Indra Company<strong>
      <p>02/2020 - Present</p>
      <p>Worked as on-site support and maintenance of the utilities and commercial system.</p>
      <ul>
          <li>Ensure the client requests are treated at minimum time</li>
          <li>Coordinate on-site work for new feature requests</li>
          <li>Remote collaboration to fix some on-site bugs.</li>
          <li>And more...</li>
      </ul>`,
      "exp-2": `<strong>🐤 Instructor | YOUTUBE, UDEMY</strong>
      <p>11/2018 - Present</p>
      <p>Produced content showcasing new tech, tutorials & interviews with top developers.</p>
      <ul>
          <li>10 000+ Youtube Subscribers</li>
          <li>280+ course copies sold</li>
          <li>1+ Million views on Youtube</li>
          <li>Tutorials, tips, talks, motivation, inspiration videos including videos on realizing projects such as e-commerce, site clones, Full Series On: HTML&CSS, ReactJS, PHP, NodeJS, VueJS, Tailwindcss, and Bootstrap, Laravel, Laravel API, MySQL, etc </li>
      </ul>`,
      "exp-3": `<strong>🐤 Full-Stack Developer | Floraison Sarl</strong>
      <p>10/2016 - 10/2017</p>
      <p>Designed and developed a digital marketing system for big company to optimize the marketing process.</p>
      <ul>
          <li>Designed and prototyped original idea</li>
          <li>Built entire code base and brought version 1 of the system to market</li>
          <li>Onboarded and trained customers (meetings)</li>
          <li>Managed a small team of developers in expansion of the system</li>
      </ul>`,
      "exp-4": `<strong>🐤 Frontend Dev | Mifos Initiative</strong>
      <p>2015 - 2016</p>
      <p>Work as a Google Summer of Code student contributor for one of the leading open source organization in the sector of fintech.</p>
      <ul>
          <li>Redesign the entire UIs of the Client App call Mifos Community.</li>
          <li>Upgrate the version of AngularJS from 1.2 to 1.6</li>
          <li>Added many more libraries to the systemn.</li>
          <li>Read more about the work done <a target="_blank" href="https://gsoc-2016-mifosx-by-kamdjouduplex.github.io/">...</a></li>
      </ul>`,
      "exp-5": `<strong>🐤 Full-Stack Developer | Yatric-Space</strong>
      <p>6/2017 - 7/2018</p>
      <p>Work remotely as a full-stack developer on a resources management system project.</p>
      <ul>
          <li>Designed and analysis</li>
          <li>Work on verious part of the project, create and maintain feature of the project.</li>
          <li>Testing and Deployment on VPS</li>
          <li>Fix bugs and keep the systeme up...</li>
      </ul>`,
      "project-1":"<span>🏆 </span>Build, deploy and maintain full e-learning platform to train my students (With Laravel & Reactjs)",
       "project-2":"<span>🏆 </span>Build, deploy and maintain a complete open blogging platform (Laravel & JQuery)",
       "project-3":"<span>🏆 </span>Build, deploy and maintain an e-commerce site from an existing OP project (Laravel & VueJS)",
       "project-4":"<span>🏆 </span>Build, deploy and maintain a research publication project for one of my client (October CMS)",
       "project-5":"<span>🏆 </span>Mini progressive web app as so many others just for learning purpose (PWA stack)",
       "project-6":"<span>🏆 </span>And many other project that I cannot disclose here for confidentiality reason",
  
       "setting": "⚙ Settings: -",
    },
  
    // Arabic translations
    "fr": {
      "profile-bio": 'Ingénieur logiciel, PDG et fondateur chez <a href="https://www.bproodev.com/" target="_blank">Bproo Dev</a>, <a href="https://www.youtube.com /c/BprooDev1" target="_blank">YouTuber</a> avec plus de 5 000 abonnés, développeur full-stack, instructeur et freelanceur.',
      "skills-qualification": "Compétences & Qualifications",
      "sq-1": "✔️ 8 ans d'expérience dans le développement frontend & backend.",
      "sq-2": "✔️ Bonnes connaissances en conception d'API et de bases de données.",
      "sq-3": "✔️ Créateur de contenu expérimenté sur YouTube et leader de la communauté.",
      "sq-4": "✔️ 5 ans d'expérience dans la formation des développeurs professionnels.",
      "tech-stack": "Technologies Utilisées",
      "work-history": "Expériences professionnelles",
      "exp-1": `<strong>🐤 Administrateur système | Indra Company<strong>
       <p>02/2020 - Présent</p>
       <p>Je travaille comme support et maintenance sur site du système commercial et toutes ces composantes.</p>
       <ul>
           <li>S'assurer que les demandes du client sont traitées dans un délai minimum</li>
           <li>Coordonner le travail sur site pour les demandes de nouvelles fonctionnalités</li>
           <li>Collaoration à distance pour corriger certains bugs sur site.</li>
           <li>Et beaucoup plus...</li>
       </ul>`,
      "exp-2": `<strong>🐤 Instructeur | YOUTUBE, UDEMY</strong>
       <p>11/2018 - Présent</p>
       <p>Création des contenus sur les nouvelles technologies, des tutoriels et des interviews avec les meilleurs développeurs.</p>
       <ul>
           <li>Plus de 10 000 abonnés YouTube</li>
           <li>Plus de 280 copies de cours vendues</li>
           <li>Plus d'un million de vues sur Youtube</li>
           <li>Les tutoriels vidéos inclu des projets tels que des site de e-commerce, les clones, la série complète sur HTML et CSS, ReactJS, PHP, VueJS, Tailwindcss, etc. </li>
       </ul>`,
       "exp-3": `<strong>🐤 Développeur Full-Stack | Floraison Sarl</strong>
       <p>10/2016 - 10/2017</p>
       <p>Conçu et développé un système de marketing numérique pour une grande entreprise afin d'optimiser le processus de marketing.</p>
       <ul>
           <li>Idée originale conçue et prototypée</li>
           <li>Création d'une base de code complète et mise sur le marché de la version 1 du système</li>
           <li>Clients intégrés et formés (réunions)</li>
           <li>Gestion d'une petite équipe de développeurs dans le cadre de l'expansion du système</li>
       </ul>`,
       "exp-4": `<strong>🐤 Développeur Frontend | Mifos Initiative</strong>
       <p>2015 - 2016</p>
       <p>Travaillez en tant que contributeur étudiant du Google Summer of Code pour une organization open source leadeur dans le secteur de la fintech.</p>
       <ul>
           <li>Reconcevoir l'ensemble des interfaces utilisateurs de l'application client appélée Mifos Community.</li>
           <li>Mettre à jour la version d'AngularJS de 1.2 à 1.6</li>
           <li>Ajout de nombreuses autres bibliothèques au système.</li>
           <li>Pour en savoir plus sur le travail effectué <a target="_blank" href="https://gsoc-2016-mifosx-by-kamdjouduplex.github.io/">...</a></li>
       </ul>`,
       "project-1":"<span>🏆 </span>Creer, déployer et maintenir une plate-forme complète d'apprentissage en ligne pour former mes étudiants",
       "project-2":"<span>🏆 </span>Créer, déployer et maintenir une plate-forme de blog ouverte a tous editeur de contenu",
       "project-3":"<span>🏆 </span>Créer, déployer et maintenir un site Web de e-commerce complet",
       "project-4":"<span>🏆 </span>Créer, déployer et maintenir un projet de publication de recherche pour l'un de mes clients",
       "project-5":"<span>🏆 </span>Mini application Web progressive comme tant d'autres juste à des fins d'apprentissage",
       "project-6":"<span>🏆 </span>Et bien d'autres projets que je ne peux divulguer ici pour des raisons de confidentialité",
  
       "setting": "⚙ Paramètres: -",
    },
  };
