var button = document.getElementById("button");
var unos = document.getElementById("unos");
var list = document.getElementById("list");

$("#unos").on("keydown", function (e) {
  if (e.keyCode == 13) $(button).click();
});

$(document).ready(function () {
  $(button).click(function () {
    var inputValue = $(unos).val().trim();

    if (inputValue !== "") {
      //$("<div>").text(inputValue);
      var leftPart = $("<div>").text(inputValue);
      var listItem = $("<div>").append(leftPart);

      listItem.css({ "border-bottom": "1px solid black", margin: "10px", padding: 0 });

      listItem.append(leftPart);

      // Create a delete button for each list item
      var deleteButton = $("<span>").html('<i class="fas fa-times"></i>').addClass("delete-btn");

      // Add click event listener to delete button
      deleteButton.click(function () {
        listItem.fadeOut(function () {
          listItem.remove();
        });
      });

      var completedButton = $("<span>").html('<i class="fa-solid fa-check"></i>').addClass("delete-btn");

      completedButton.click(function () {
        listItem.css("background-color", "rgb(17, 255, 136)");
      });

      // Append the delete button to the list item
      var rightPart = $("<div>");
      rightPart.css({ display: "flex", "justify-content": "end" });

      rightPart.append(deleteButton);
      rightPart.append(completedButton);
      listItem.append(rightPart);

      $(list).append(listItem);
      $(unos).val(""); // Clear input after adding
    }
  });
});
