function socialMediaClick(type) {
    document.getElementById('copy').value=type
}

function copySocialMediaLink() {
  var copyText = document.getElementById("copy");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}