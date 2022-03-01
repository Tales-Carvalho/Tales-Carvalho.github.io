$(document).ready(() => {
  $("a#button-camera").attr("href", "foto_layout.html")
  $("a#button-message").attr("href", "mensagens/1.html")
  $("iframe#video-player").attr("src", `https://www.youtube.com/embed/${music_id}?enablejsapi=1&loop=1`)
  $("#music-name").text(music_name)
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