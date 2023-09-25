function init() {
  let socket = io.connect("https://try-server-8tm6.onrender.com/");

  socket.on("connect", () => {
    console.log(socket.id);
  });
  let text = "";
  document.getElementById("txt").addEventListener("change", function () {
    text = this.value;
    console.log(text);
  });
  document.getElementById("btn").addEventListener("click", function () {
    socket.emit("promeni", text);
  });
  socket.on("promenjena", (poruka) => {
    console.log(poruka);
  });
}

window.addEventListener("load", init);
