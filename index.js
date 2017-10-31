$(document).ready(function (){
});

function searchRepositories(){
  const term = document.getElementById('searchTerms').value
  const url = `https://api.github.com/search/repositories?q=${term}`
  $.get(url, function(response){
    $('#results').html(getSearchResults(response))
  }
).fail(displayError())
}
