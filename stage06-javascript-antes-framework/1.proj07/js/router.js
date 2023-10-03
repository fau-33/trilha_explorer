export class Router {

    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event.preventDefault()
        event = event || window.event
    
        window.history.pushState({}, "", event.target.href)
    
        handle();
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
    
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })

    }
}
