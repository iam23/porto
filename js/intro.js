let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{I_}", ms: 100 },
    { t: "{IL_}", ms: 100 },
    { t: "{ILH_}", ms: 100 },
    { t: "{ILHA_}", ms: 100 },
    { t: "{ILHAM_}", ms: 100 },
    { t: "{ILHAM _}", ms: 100 },
    { t: "{ILHAM A_}", ms: 100 },
    { t: "{ILHAM AK_}", ms: 100 },
    { t: "{ILHAM AKB_}", ms: 100 },
    { t: "{ILHAM AKBA_}", ms: 100 },
    { t: "{ILHAM AKBAR_}", ms: 200 },
    { t: "{ILHAM AKBAR }", ms: 200 },
    { t: "{ILHAM AKBAR_}", ms: 200 },
    { t: "{ILHAM AKBAR }", ms: 200 },
    { t: "{ILHAM AKBAR_}", ms: 200 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();