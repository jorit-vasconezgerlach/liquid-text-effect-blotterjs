container = document.getElementById("main");

const text = new Blotter.Text("Liquid", {
    family: "serif",
    size: 120,
    fill: "#fff"
});

let material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.3;
material.uniforms.uVolatility.value = 0.3;
material.uniforms.uSeed.value = 0.1;

let blotter = new Blotter(material, {
    texts: text
});

let scope = blotter.forText(text);
scope.appendTo(container);