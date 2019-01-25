var angles = [{
        ball: 30,
        ground: 180
    },
    {
        ball: 330,
        ground: 180
    },
    {
        ball: 180,
        ground: 315
    },
    {
        ball: 0,
        ground: 315
    }
];

function showCombinedAngles(angles) {
    // The magnitude (m) represents the relative strength of the ball and
    // the ground. A lower ground value means it has less of an effect.
    const ball = {
        m: 1,
        theta: polar.fromDeg(angles.ball)
    };
    const ground = {
        m: 0.5,
        theta: polar.fromDeg(angles.ground)
    };
    const combined = polar.add({
        polar1: ball,
        polar2: ground
    });
    const angle = polar.toDeg(combined.theta);
    const result = Math.round(angle + 360) % 360;
    const output = document.querySelector("#result");
    output.innerHTML += `<p>` +
        `<span style="color:red">Ball: ${angles.ball}</span> ` +
        `<span style="color:blue">Ground: ${angles.ground}</span> ` +
        `<span style="color:green">Result: ${result}</span> ` +
        `</p>`;
}

angles.forEach(showCombinedAngles);

// Display a full test of other angle combinations in 30-degree increments.
result.innerHTML += `<h3>Testing other angles</h3>`;
for (let ball = 0; ball < 360; ball += 30) {
    for (let ground = 0; ground <= 360; ground += 30) {
        showCombinedAngles({
            ball,
            ground
        });
    }
}