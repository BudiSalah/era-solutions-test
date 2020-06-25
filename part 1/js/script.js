// show or hide the black layer
function showHideLayer() {
    let layerParent = document.getElementById("enough-section-wrapper");
    if (!layerParent) {return;}
    window.addEventListener("scroll", e => {
        let checkOffset = (layerParent.offsetTop - 240) <= window.pageYOffset;       
        checkOffset ? layerParent.classList.add("remove") : layerParent.classList.remove("remove");
    })
}
showHideLayer();