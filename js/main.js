const load = (num) => {
  $("body").removeClass()
  $("body").addClass(`bg-${num}`)
  $("a#button-camera").attr("href", `foto_layout.html?${num}`)
  $("a#button-message").attr("href", `mensagens/${num}.html`)
  $("iframe#video-player").attr("src", `https://www.youtube.com/embed/${musicas[num-1].id}?enablejsapi=1&loop=1`)
  $("#music-name").text(musicas[num-1].name)
  $("#music-name").attr("href", `https://www.youtube.com/watch?v=${musicas[num-1].id}`)
}

$(document).ready(() => {
  const randomDay = Math.floor(Math.random()*19 + 1)
  for (let i = 1; i < 20; i++) {
    $("#select-day").append("<option value=\"" + i + "\">Dia " + i + "</option>")
  }
  $("#select-day").val(randomDay.toString()).change()
  const randomApelido = Math.floor(Math.random()*apelidos.length)
  $("#span-apelido").text(apelidos[randomApelido])
  // if (location.hostname == '') // Note for myself: this checks if running locally
  //   load(new Date().getDate() + 1) // Then, preview next day
  // else
  //   load(new Date().getDate())
})

$("#button-play-video").click(() => {
  callPlayer("video-container", "playVideo")
})

$("#button-pause-video").click(() => {
  callPlayer("video-container", "pauseVideo")
})

$("#content-close").click(() => {
  $("div#content-container").removeClass("fadein")
  $("div#content-container").addClass("fadeout")
})

$("#button-help").click(() => {
  $("#content-title").text("O que está acontecendo aqui?")
  $("div#content-container").removeClass("invisible")
  $("div#content-container").removeClass("fadeout")
  $("div#content-container").addClass("fadein")
})

$("#button-camera").click(() => {
  $("#content-title").text("Foto do Dia")
  $("div#content-container").removeClass("invisible")
  $("div#content-container").removeClass("fadeout")
  $("div#content-container").addClass("fadein")
})

$("#button-message").click(() => {
  $("#content-title").text("Mensagem do Dia")
  $("div#content-container").removeClass("invisible")
  $("div#content-container").removeClass("fadeout")
  $("div#content-container").addClass("fadein")
})

$("#select-day").change(() => {
  load($("#select-day").val())
})