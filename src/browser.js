import { fetchRepos, fetchNextRepos } from './repos';
import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select2';

fetchRepos();
initSortable();
initMarkdown();
initSelect2();

const nextLink = document.getElementById('next-link');
nextLink.addEventListener('click', fetchNextRepos);
