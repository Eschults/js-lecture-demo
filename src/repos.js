const API_URL = 'https://api.github.com/orgs/lewagon/repos';
const list = document.getElementById('repos');

const appendRepoNames = (repos) => {
  repos.forEach((repo) => {
    const listItem = `<li class="list-group-item">${repo.name}</li>`;
    list.insertAdjacentHTML('beforeend', listItem);
  });
}

function fetchRepos(pageNumber = 1) {
  fetch(`${API_URL}?page=${pageNumber}&per_page=5`)
    .then(response => response.json())
    .then(appendRepoNames);
}

const fetchNextRepos = (event) => {
  event.preventDefault();
  const clickedLink = event.currentTarget;
  fetchRepos(clickedLink.dataset.nextPage);
  clickedLink.dataset.nextPage = parseInt(clickedLink.dataset.nextPage, 10) + 1;
}

export { fetchRepos, fetchNextRepos };
