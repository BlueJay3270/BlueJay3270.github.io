//"Next" Button links to the next page
function nextPage(curentPage) {
  curentPage += 1;
  //for when on Github Site
  //window.location.href = "https://bluejay3270.github.io/mainpage(" + curentPage + ")";
  //for testing
  window.location.href = "mainpage(" + curentPage + ").html";
}

//"Previous" Button links to previus page
function lastPage(curentPage) {
  curentPage -= 1;
  //for when on github site:
  window.location.href = "https://bluejay3270.github.io/mainpage(" + curentPage + ")";
  //for testing:
  window.location.href = 'mainpage(' + curentPage + ').html';
}

function openPage(page) {
  window.location.href = 'https://bluejay3270.github.io/' + page + '.html';
}
