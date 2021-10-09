// Function to return a message if user prefers demovor not
function renderScreenDemoSection(confirmQuestionaireDemo) {
  if (confirmQuestionaireDemo) {
    return "[Demo](https://watch.screencastify.com/v/BxUZL2DKWqsrqHPWjlj2)";
  }else {
    return "No problem, you can contact using my email address if you decide otherwise"
  }
}

// Function to return a message if user doesn't want contributors
function renderContributingSection(confirmContributers) {
  if (confirmContributers) {
    return `
  Contributions are not accepted at this time.
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/License-${license}-red.svg)
    `;
  }else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  }else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
  return `
  ## [License](#table-of-contents)
    
  The application is covered under the following license:

  ${renderLicenseLink(license)}
    `;
  }else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents
  * [Project Description](#project-description)
  * [Project Installation](#project-installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Contact Me](#Contact-me)
  * [Screen Questionaire Demo](#screen-questionaire-demo)
  
  ## [Project Description](#table-of-contents)
  ${data.what}
  ${data.why}
  ${data.how}

  ## [Project Installation](#table-of-contents)
  ${data.installation}

  ## [Usage](#table-of-contents)
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## [Contributions](#table-of-contents)

  ${renderContributingSection(data.confirmContributers)}
  
  ## [Tests](#table-of-contents)
  ${data.test}
  
  ## [Contact Me](#table-of-contents)
  Please contact me using the links below:
  
  [GitHub](https://github.com/${data.githubUsername})

  [Email: ${data.email}](mailto:${data.email})

  ## [Screen Questionaire Demo](#table-of-contents)
  ${renderScreenDemoSection(data.confirmQuestionaireDemo)}
`;
}

module.exports = generateMarkdown;
