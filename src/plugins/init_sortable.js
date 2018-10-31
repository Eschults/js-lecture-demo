import Sortable from 'sortablejs';

function initSortable() {
  const list = document.getElementById('repos');
  const sortable = Sortable.create(list, {
    chosenClass: "active",
    animation: 150,
    onEnd: (event) => {
      alert(`${event.item.textContent} moved to ${event.newIndex}`);
    }
  });
}

export { initSortable };
