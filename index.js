let searchable = [
    'Elastic',
    'PHP',
    'Something about CSS',
    'How to code',
    'JavaScript',
    'Coding',
    'Some other item',
  ];
  
  const searchInput = document.querySelector('.searcher');
  const searchWrapper = document.querySelector('.hero-content');
  const resultsWrapper = document.querySelector('.results');
  
  searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if (input.length) {
      results = searchable.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });
    }
    renderResults(results);
  });
  
  function renderResults(results) {
    if (!results.length) {
      return searchWrapper.classList.remove('show');
    }
  
    const content = results
      .map((item) => {
        return `<li>${item}</li>`;
      })
      .join('');
  
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
  }
  let popup = document.getElementById("popup")
  function openpopup(){
      popup.classList.add("open-popup")
  }
  function closepopup(){
      popup.classList.remove("open-popup")
  }

  const myInput = document.getElementById("my-input");
  function stepper (btn) {
  let id =
  btn.getAttribute("id");
  let min = myInput.getAttribute("min");
  let max = myInput.getAttribute("max");
  let step = myInput.getAttribute("step");
  let val = myInput.getAttribute("value");
  let calcStep = (id == "increment") ? (step*1):
  (step -1);
  console.log(id, calcStep);
  }