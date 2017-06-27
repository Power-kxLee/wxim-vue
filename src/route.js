import NavConfig from "./nav.config_2.json";

const checkRouter = (config) => {
  let route = [];
  config.map( nav => 
    nav.list.map(page => 
      route.push({
        name : page.name,
        path : page.path,
        component : resolve => require([`./view/xwim${page.component}`], resolve),
        meta: {
          requireAuth : page.meta.requireAuth,
          showHeader  : page.meta.showHeader ,
          loginInCheckIndex  : !!page.meta.loginInCheckIndex ? true : false
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

