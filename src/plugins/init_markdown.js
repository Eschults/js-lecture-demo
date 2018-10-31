import { markdown } from 'markdown';

function initMarkdown() {
  const textarea = document.getElementById('editor');
  const preview = document.getElementById('preview');
  textarea.addEventListener('keyup', (event) => {
    const html = markdown.toHTML(textarea.value);
    preview.innerHTML = html;
  });
}

export { initMarkdown };
