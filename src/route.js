import NavConfig from "./nav.config.json";

const checkRouter = (config) => {
  let route = [];
  config.map( nav => 
    nav.list.map(page => 
      route.push({
        name : page.name,
        path : page.path,
        component : resolve => require([`./view/page${page.component}`], resolve),
        meta: {
          requireAuth : page.meta.requireAuth,
          showHeader  : page.meta.showHeader
        }
      })
    )
  );

  return {
    route
  } 
}

const route = checkRouter(NavConfig);

export default route.route;

