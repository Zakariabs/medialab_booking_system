document.querySelector('.return-button').addEventListener('click', function() {
    window.location.href = '../ClientHomeScreen/index.html';
});

document.querySelector('.select-button').addEventListener('click', function() {
    window.location.href = '../ProductSelectPage/index.html';
});

function handleSearchFocus() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = "block";
}

function handleSearchInput() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    var searchBar = document.querySelector(".search-bar");
    var filter = searchBar.value.toLowerCase();
    var links = dropdownMenu.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        var txtValue = links[i].textContent || links[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            links[i].style.display = "";
        } else {
            links[i].style.display = "none";
        }
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.search-bar')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
