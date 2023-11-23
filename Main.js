window.addEventListener('load', () => Main.w3_close());
window.addEventListener('popstate', () => Main.w3_close());

var Main = {
    mySidebar: document.getElementById("mySidebar"),
    overlayBg: document.getElementById("myOverlay"),
    topBar: document.getElementById("topBar"),
  
    w3_open: function() {
        if (this.mySidebar.style.width === "0px" || !this.mySidebar.style.width) {
          this.mySidebar.style.width = "250px";
          this.overlayBg.style.display = "block";
          this.topBar.style.paddingLeft = "250px";
        } else {
          this.mySidebar.style.width = "0";
          this.overlayBg.style.display = "none";
          this.topBar.style.paddingLeft = "0px";
        }
      },
    
  
    w3_close: function() {
      this.mySidebar.style.width = "0";
      this.overlayBg.style.display = "none";
      this.topBar.style.paddingLeft = "0px";
    }
    
  };
  