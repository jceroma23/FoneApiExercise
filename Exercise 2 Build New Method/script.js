
const updateMouse = (update) => {
    let main = document.querySelector('main');
    main.innerHTML = markup(mouse);
    console.info(update);
}


/**
 * This Has Additional Methods which is
 * wheel Size and Color for Exercise 3
 */
const mouse = {
    name: `Inplay`,
    model: `G263`,
    size: 10,
    mouseWheel: {
        Wheel: true,
        size: 10,
        color: `Black`,
        toggleWheels: function (wheelStatus) {
            this.Wheel = wheelStatus;
            updateMouse('Wheel has been Change');
        },
        toggleChangeSizeColor: function (wheelSize, wheelColor) {
            this.size = wheelSize;
            this.color = wheelColor;
            updateMouse('Size and Color Successfully Change');
        }
    },
    lights: true,
    wireless: false,
    toggleLights: function (lightStatus) {
        this.lights = lightStatus;
        updateMouse(`Mouse Lights Status change`);
    },
    toggleWireLess: function (wirelessStatus) {
        this.wireless = wirelessStatus;
        updateMouse(`Mouse wireless status change`);
    }
};


const markup = (mouse) => {
    return `
    <div>
        <h3>${mouse.name}</h3>
        <ul>
            <li>Model: ${mouse.model}</li>
            <li>Size: ${mouse.size}</li>
            <li>Mouse Wheel: ${mouse.mouseWheel.Wheel ? "Yes" : "No" }</li>
            <li> Mouse Wheel Size: ${mouse.mouseWheel.size}</li>
            <li> Mouse Wheel Color: ${mouse.mouseWheel.color}</li>
            <li>Lights: ${mouse.lights ? "Open" : "Closed"}</li>
            <li>Wireless: ${mouse.wireless ? "Yes" : "No"}</li>
        </ul>
    </div>
    `
};


const main = document.createElement("main");
main.innerHTML = markup(mouse);
document.body.appendChild(main);


/**
 * I have displayed Mouse Properties including what I learned On Video Course
 * Object Method
 */
console.log(`This is my Mouse`, mouse);
console.log(`Mouse color and Size Before change`, mouse.mouseWheel.size, mouse.mouseWheel.color);

mouse.mouseWheel.toggleChangeSizeColor(29, `Pink`);

console.log(`Mouse color and Size after change`, mouse.mouseWheel.size, mouse.mouseWheel.color);
