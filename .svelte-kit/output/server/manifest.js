export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Drone Scan2.jpg","aerometrix_logo.png","background.jpg","close_up_scan.jpg","close_up_scan_cropped.jpg","favicon.png","ipad image.png","logo.svg","panel.jpg","solar-walking.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DJaFsVKJ.js","app":"_app/immutable/entry/app.XTpUvmTR.js","imports":["_app/immutable/entry/start.DJaFsVKJ.js","_app/immutable/chunks/entry.Btj_eQY1.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/entry/app.XTpUvmTR.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.DgBp4Tqq.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
