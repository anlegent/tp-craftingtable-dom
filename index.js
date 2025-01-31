const MATERIAL_AIR_ID = "";
const MATERIAL_IRON_INGOT_ID = "IRON-INGOT";
const MATERIAL_STICK_ID = "STICK";
const MATERIAL_GOLD_INGOT_ID = "GOLD-INGOT";
const MATERIAL_DIAMOND_ID = "DIAMOND";
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
const blockOfIronRecipe = [
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_IRON_INGOT_ID,
  MATERIAL_IRON_INGOT_ID,
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
const blockOfGoldRecipe = [
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_GOLD_INGOT_ID,
  MATERIAL_GOLD_INGOT_ID,
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
const blockOfDiamondRecipe = [
  MATERIAL_DIAMOND_ID,
  MATERIAL_DIAMOND_ID,
  MATERIAL_DIAMOND_ID,
  MATERIAL_DIAMOND_ID,
  MATERIAL_DIAMOND_ID,
  MATERIAL_DIAMOND_ID,
  MATERIAL_DIAMOND_ID,
  MATERIAL_DIAMOND_ID,
  MATERIAL_DIAMOND_ID,
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
const blockOfCoalRecipe = [
  MATERIAL_COAL_ID,
  MATERIAL_COAL_ID,
  MATERIAL_COAL_ID,
  MATERIAL_COAL_ID,
  MATERIAL_COAL_ID,
  MATERIAL_COAL_ID,
  MATERIAL_COAL_ID,
  MATERIAL_COAL_ID,
  MATERIAL_COAL_ID,
];

const ironPickaxeRecipeImageSrc = "./assets/iron-pickaxe.webp";
const ironAxeRecipeImageSrc = "./assets/iron-axe.webp";
const blockOfIronRecipeImageSrc = "./assets/block-of-iron";
const goldenPickaxeRecipeImageSrc = "./assets/golden-pickaxe.webp";
const goldenAxeRecipeImageSrc = "./assets/golden-axe.webp";
const blockOfGoldRecipeImageSrc = "./assets/block-of-gold";
const diamondPickaxeRecipeImageSrc = "./assets/diamond-pickaxe.webp";
const diamondAxeRecipeImageSrc = "./assets/diamond-axe.webp";
const blockOfDiamondRecipeImageSrc = "./assets/block-of-diamond";

const torchRecipeImageSrc = "./assets/torch.webp";
const blockOfCoalRecipeImageSrc = "./assets/block-of-coal";

const recipeList = [
  ironPickaxeRecipe,
  ironAxeRecipe,
  blockOfIronRecipe,
  goldenPickaxeRecipe,
  goldenAxeRecipe,
  blockOfGoldRecipe,
  diamondPickaxeRecipe,
  diamondAxeRecipe,
  blockOfDiamondRecipe,
  torchRecipe,
  blockOfCoalRecipe,
];
const recipeImageSrcList = [
  ironPickaxeRecipeImageSrc,
  ironAxeRecipeImageSrc,
  blockOfIronRecipeImageSrc,
  goldenPickaxeRecipeImageSrc,
  goldenAxeRecipeImageSrc,
  blockOfGoldRecipeImageSrc,
  diamondPickaxeRecipeImageSrc,
  diamondAxeRecipeImageSrc,
  blockOfDiamondRecipeImageSrc,
  torchRecipeImageSrc,
  blockOfCoalRecipeImageSrc,
];

const craftingTable = ["", "", "", "", "", "", "", "", ""];
const inventoryTable = [2, 5, 1, 3, 4];

//let pipette = MATERIAL_AIR_ID;
let selectedMaterialName = MATERIAL_AIR_ID;
let selectedMaterialImgSrc = MATERIAL_AIR_IMG;
let selectedButton = null;
// create item
let inv = document.getElementById("inventory");

const tableGridElements = document.querySelectorAll("#tablegrid");

function createItem(alt, src) {
  const createInvButton = document.createElement("button");
  const createInvImg = document.createElement("img");
  createInvImg.src = src;
  createInvImg.alt = alt;

  createInvButton.appendChild(createInvImg);
  createInvImg.classList.add("inventorygrid");

  return createInvButton;
}

for (let i = 0; i < inventoryTable.length; i++) {
  const itemNumber = inventoryTable[i];
  const materialName = materials[itemNumber];
  const materialImgSrc = materialsImageSrc[itemNumber];

  const createInvButton = createItem(materialName, materialImgSrc);

  createInvButton.addEventListener("click", () => {
    if (selectedButton !== null) {
      selectedButton.classList.remove("selected");
    }
    if (createInvButton == selectedButton) {
      selectedMaterialName = MATERIAL_AIR_ID;
      selectedMaterialImgSrc = MATERIAL_AIR_IMG;
      selectedButton = null;
      selectedButton.classList.remove("selected");
    } else {
      selectedMaterialName = materialName;
      selectedMaterialImgSrc = materialImgSrc;
      selectedButton = createInvButton;
    }

    createInvButton.classList.add("selected");
  });
  inv.appendChild(createInvButton);
}

for (let i = 0; i < tableGridElements.length; i++) {
  const tableGrid = tableGridElements[i];

  tableGrid.addEventListener("click", () => {
    const image = tableGrid.firstElementChild;

    image.setAttribute("src", selectedMaterialImgSrc);
    image.setAttribute("alt", selectedMaterialName);
  });
}
