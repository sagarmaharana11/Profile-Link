const target = {
  clicked: 0,
  currentFollowers: parseInt(localStorage.getItem("incCount")) || 0,
  btn: document.querySelector("a.btn"),
  fw: document.querySelector("span.followers"),
};

const follow = () => {
  target.clicked += 1;
  target.btn.innerHTML = target.clicked % 2 === 0 ? 'Follow <i class="fas fa-user-plus"></i>' : 'Following <i class="fas fa-user-times"></i>';
  
  if (target.clicked % 2 !== 0) {
    target.currentFollowers += 1;
    localStorage.setItem("incCount", target.currentFollowers);
    window.location.href = "https://www.linkedin.com/in/sagar-maharana-033094241/"; // Redirect to LinkedIn
  }
  
  target.fw.textContent = target.currentFollowers;
  target.btn.classList.toggle("following");
};

/* Light/Dark Mode */
const toggleLightDark = () => {
  const body = document.body.style;
  body.backgroundColor = body.backgroundColor === "black" ? "white" : "black";
  body.color = body.color === "white" ? "black" : "white";
  document.querySelector("form label").style.color = body.color === "white" ? "yellow" : "black";
};

document.getElementById("on").addEventListener("click", toggleLightDark);
document.getElementById("off").addEventListener("click", toggleLightDark);

// Function to fetch GitHub repository count
function fetchGitHubRepoCount(username) {
  const apiUrl = `https://api.github.com/users/${username}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.public_repos !== undefined) {
        document.getElementById('repoCount').textContent = data.public_repos;
      } else {
        document.getElementById('repoCount').textContent = 'Data not available.';
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      document.getElementById('repoCount').textContent = 'Failed to fetch data.';
    });
}

const githubUsername = 'sagarmaharana11'; // Your GitHub username
fetchGitHubRepoCount(githubUsername);
