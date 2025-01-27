const MATERIAL_AIR_ID = "";
const MATERIAL_IRON_INGOT_ID = "IRON-INGOT";
const MATERIAL_STICK_ID = "STICK";
const MATERIAL_GOLD_INGOT_ID = "GOLD-INGOT";
const MATERIAL_DIAMOND_ID = "COPPER-INGOT";
const MATERIAL_COAL_ID = "COAL";

const MATERIAL_AIR_IMG = "./assets/air.webp";
const MATERIAL_IRON_INGOT_IMG = "./assets/iron-ingot.webp";
const MATERIAL_STICK_IMG = "./assets/stick.webp";
const MATERIAL_GOLD_INGOT_IMG = "./assets/gold-ingot.webp";
const MATERIAL_DIAMOND_IMG = "./assets/diamond.webp";
const MATERIAL_COAL_IMG = "./assets/coal.webp";

const materials = [
  MATERIAL_AIR_ID,
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_STICK_ID,
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_DIAMOND_ID,
  MATERIAL_COAL_ID,
];
const materialsImageSrc = [
  MATERIAL_AIR_IMG,
  MATERIAL_IRON_INGOT_IMG,
  MATERIAL_STICK_IMG,
  MATERIAL_GOLD_INGOT_IMG,
  MATERIAL_DIAMOND_IMG,
  MATERIAL_COAL_IMG,
];

const ironPickaxeRecipe = [
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_AIR_ID,
  MATERIAL_STICK_ID,
  MATERIAL_AIR_ID,
  MATERIAL_AIR_ID,
  MATERIAL_STICK_ID,
  MATERIAL_AIR_ID,
];
const ironAxeRecipe = [
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_AIR_ID,
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_STICK_ID,
  MATERIAL_AIR_ID,
  MATERIAL_AIR_ID,
  MATERIAL_STICK_ID,
  MATERIAL_AIR_ID,
];
const goldenPickaxeRecipe = [
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_AIR_ID,
  MATERIAL_STICK_ID,
  MATERIAL_AIR_ID,
  MATERIAL_AIR_ID,
  MATERIAL_STICK_ID,
  MATERIAL_AIR_ID,
];
const goldenAxeRecipe = [
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_AIR_ID,
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_STICK_ID,
  MATERIAL_AIR_ID,
  MATERIAL_AIR_ID,
  MATERIAL_STICK_ID,
  MATERIAL_AIR_ID,
];
const diamondPickaxeRecipe = [
  MATERIAL_DIAMOND_ID,
  MATERIAL_DIAMOND_ID,
  MATERIAL_DIAMOND_ID,
  MATERIAL_AIR_ID,
  MATERIAL_STICK_ID,
  MATERIAL_AIR_ID,
  MATERIAL_AIR_ID,
  MATERIAL_STICK_ID,
  MATERIAL_AIR_ID,
];
const diamondAxeRecipe = [
  MATERIAL_DIAMOND_ID,
  MATERIAL_DIAMOND_ID,
  MATERIAL_AIR_ID,
  MATERIAL_DIAMOND_ID,
  MATERIAL_STICK_ID,
  MATERIAL_AIR_ID,
  MATERIAL_AIR_ID,
  MATERIAL_STICK_ID,
  MATERIAL_AIR_ID,
];

const torchRecipe = [
  MATERIAL_AIR_ID,
  MATERIAL_AIR_ID,
  MATERIAL_AIR_ID,
  MATERIAL_AIR_ID,
  MATERIAL_COAL_ID,
  MATERIAL_AIR_ID,
  MATERIAL_AIR_ID,
  MATERIAL_STICK_ID,
  MATERIAL_AIR_ID,
];

const ironPickaxeRecipeImageSrc = "./assets/iron-pickaxe.webp";
const ironAxeRecipeImageSrc = "./assets/iron-axe.webp";
const goldenPickaxeRecipeImageSrc = "./assets/golden-pickaxe.webp";
const goldenAxeRecipeImageSrc = "./assets/golden-axe.webp";
const diamondPickaxeRecipeImageSrc = "./assets/diamond-pickaxe.webp";
const diamondAxeRecipeImageSrc = "./assets/diamond-axe.webp";

const torchRecipeImageSrc = "./assets/torch.webp";

const recipeList = [
  ironPickaxeRecipe,
  ironAxeRecipe,
  goldenPickaxeRecipe,
  goldenAxeRecipe,
  diamondPickaxeRecipe,
  diamondAxeRecipe,
  torchRecipe,
];
const recipeImageSrcList = [
  ironPickaxeRecipeImageSrc,
  ironAxeRecipeImageSrc,
  goldenPickaxeRecipeImageSrc,
  goldenAxeRecipeImageSrc,
  diamondPickaxeRecipeImageSrc,
  diamondAxeRecipeImageSrc,
  torchRecipeImageSrc,
];

const craftingTable = ["", "", "", "", "", "", "", "", ""];
const inventoryTable = [2, 5, 1, 3, 4];

let pipette = MATERIAL_AIR_ID;
// create item

function createItem(alt, src) {
  const createInvButton = document.createElement("button");
  const createInvImg = document.createElement("img");
  createInvImg.src = src;
  createInvImg.alt = alt;

  createInvButton.appendChild(createInvImg);
  createInvImg.classList.add("itemsize");

  return createInvButton;
}

for (let i = 0; i < inventoryTable.length; i++) {
  const itemNumber = inventoryTable[i];

  const createInvButton = createItem(
    materials[itemNumber],
    materialsImageSrc[itemNumber]
  );

  let inv = document.getElementById("inventory").appendChild(createInvButton);
  inv.classList.add("inventorygrid");
}
