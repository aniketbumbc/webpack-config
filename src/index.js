const elvenShieldRecipe = {
    leatherStrips:3,
    ironIngot:1,
    refinedMoonstone: 4
}


const elvenGauntletRecipe = {
    ...elvenShieldRecipe,
    leather:1,
    refinedMoonstone:4
}


console.log(elvenShieldRecipe);
console.log("test",elvenGauntletRecipe);