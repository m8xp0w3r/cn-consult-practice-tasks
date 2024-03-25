import { Entry } from '@cn-consult-practice-tasks/entry-store';

const btn = document.getElementById('btn');
const searchField = document.getElementById('searchField') as HTMLInputElement | undefined;
btn?.addEventListener('click', function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
  console.log(Entry.createEntries());
  console.log(searchField.value);
});


