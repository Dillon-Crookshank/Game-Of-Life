const gameEngine = new GameEngine();

const automata = new Automata();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.init(ctx);

	automata.init(ctx.canvas.width, ctx.canvas.height);

	gameEngine.addEntity(automata);

	gameEngine.start();
});
