export class Router {
    routes = {}

    add(routeName, page) {
      this.routes[routeName] = page
    }

    route(event) {
    
      event = event || window.event
      event.preventDefault()

      window.history.pushState({}, "", event.target.href)
    
      this.handle()
    }

    handle() {
      const {pathname} = window.location
      const route = this.routes[pathname] || this.routes[404]
      const back = document.querySelector("#body")
  
      fetch(route)
      .then(data => data.text())
      .then(html => {
          document.querySelector("#app").innerHTML = html
      })
      
      switch(pathname){
          case "/universe":
              back.style.backgroundImage = "url(/img/montain-2.png)"; 
              break
          case "/exploration":
              back.style.backgroundImage = "url(/img/montain-3.png)"
              break
          default:
              back.style.backgroundImage = "url(/img/montain-1.png)"
      }
    }
}


