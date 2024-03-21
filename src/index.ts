import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

window.addEventListener("resize",()=>{
	console.log("resized");
	const scaleY = window.innerWidth / app.screen.height;
	const scaleX = window.innerHeight / app.screen.width;
	const scale = Math.min(scaleX, scaleY);

	const gameWidth = app.screen.width * scale;
	const gameHeight = app.screen.height * scale;

	const marginHorizontal = (window.innerWidth - gameWidth) / 2;
	const marginVertical = (window.innerHeight - gameHeight) / 2;

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";
})

Loader.shared.add({url:"./ball.png", name:"Pelota"})
const clampy: Sprite = Sprite.from("Pelota");

console.log(clampy.width, clampy.height);

clampy.anchor.set(0);


clampy.x = 0;
clampy.y = 0;

app.stage.addChild(clampy);
