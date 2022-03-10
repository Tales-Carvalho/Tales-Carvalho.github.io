const load = (num) => {
  $("body").addClass(`bg-${num}`)
  $("a#button-camera").attr("href", "foto_layout.html")
  $("a#button-message").attr("href", `mensagens/${num}.html`)
  $("iframe#video-player").attr("src", `https://www.youtube.com/embed/${musicas[num-1].id}?enablejsapi=1&loop=1`)
  $("#music-name").text(musicas[num-1].name)
  $("#music-name").attr("href", `https://www.youtube.com/watch?v=${musicas[num-1].id}`)
}

$(document).ready(() => {
  load(new Date().getDate())
  // load(10)
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