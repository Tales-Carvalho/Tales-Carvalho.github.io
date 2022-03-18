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
  if (location.hostname == '') // Note for myself: this checks if running locally
    load(new Date().getDate() + 1) // Then, preview next day
  else
    load(new Date().getDate())
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