
export const leftPad = (number) =>{
    const pad = '00';
    return pad.substring(0,pad.length - number.length) + number;
}

export const formattedTime = (secs) =>{
    const minutes = parseInt(secs/60,10);
    const seconds = parseInt(secs % 60, 10);
    return `${leftPad(minutes.toString())} : ${leftPad(seconds.toString())}`;
}

// --- Validar document is fullscreen
export const isFullScreen = () => document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen

// --- solicitar FullScreen al navegador para el elemento dado
export const requestFullScreen = element => {
  try{ element.requestFullscreen()        } catch(e){
  try{ element.webkitRequestFullscreen()  } catch(e){
  try{ element.mozRequestFullscreen()     } catch(e){
  try{ element.msRequestFullscreen()      } catch(e){
    console.log(e)
  }}}}
}

// --- salir del FullScreen
export const exitFullScreen = () => {
  try { document.exitFullscreen()       } catch(e){
  try { document.webkitExitFullscreen() } catch(e){
  try { document.mozCancelFullscreen()  } catch(e){
  try { document.msExitFullscreen()     } catch(e){
    console.log(e)
  }}}}
}