import NavConfig from "./nav.config_2.json";

const mychild = (child) =>{
  let in_arrys = [];
  console.log(child)
  if(!child ){
    return [];
  }

  for(let val of child){
    in_arrys.push({
      path : val.path,
      component : resolve => require([`./view${val.component}`], resolve)
    })
  }
  return in_arrys;
}
const checkRouter = (config) => {
  let route = [];
  config.map( nav => 
    nav.list.map(page => 

      route.push({
        name : page.name,
        path : page.path,
        component : resolve => require([`./view${page.component}`], resolve),
        children : mychild(page.children),
        redirect : page.redirect || "",
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

