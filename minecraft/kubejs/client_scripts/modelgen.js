// ====================================================
// 
//      I don't like filling out jsons and file 
//    paths manually, so all of that is done here.
// 
// ====================================================

// A few quick access constants
const rpPath = "config/paxi/resourcepacks/Wanderlust_Resources/assets/";
const blockModels = "models/block/";

// ================= Helper Functions =================
const inRP = (path, modID) => {
    return rpPath + defaultModID(modID) + "/" + path; 
    // Returns the selected path in modID's resource pack. If
    // modID is left empty, it will autofill with Wanderlust's.
}

const defaultModID = (modID) => {
    if (!modID) {
        return "wanderlust";
    }
    return modID;
    // Returns Wanderlust's modID if empty, 
    // otherwise it returns its input.
}

// JavaScriptJS adds 'JsonIO.writeAndCreateDirectories' 
// as an alternative to just 'JsonIO.write', making it
// just generally easier to do shit.

const editBM = (modelID, modelJson) => {
    let s = modelID.split(":");
    let model = s[1]
    let namespace = s[0]
    JsonIO.writeAndCreateDirectories(inRP(blockModels, namespace) + model, modelJson)
    // Quick edit a block model. Inputs:
    // > modelID: Model path, formatted as 'namespace:subdir/model.json'
    // > modelJson: The actual block model Json
}
const editBS = (blockID, blockstateJson) => {
    let s = blockID.split(":");
    let block = s[1]
    let namespace = s[0]
    JsonIO.writeAndCreateDirectories(inRP("blockstates/", namespace) + block, blockstateJson)
    // Quick edit a blockstate Json. Inputs:
    // > blockID: Self-explanatory. Formatted as 'namespace:block'
    // > modelJson: the actual blockstate Json
}

// =========================== Implementations ===========================

// ====================== Templates ======================

editBM("wanderlust:templates/beam_horizontal_z.json", {
	"parent": "minecraft:block/cube_all",
	"textures": {
		"particle": "#side"
	},
	"elements": [
		{
			"from": [ 0, 0, 0 ],
			"to": [ 16, 16, 16 ],
			"faces": {
				"down":  { "texture": "#side", "cullface": "down"},
				"up":    { "texture": "#side", "cullface": "up"},
				"north": { "texture": "#end", "cullface": "north"},
				"south": { "texture": "#end", "cullface": "south"},
				"east":  { "texture": "#side", "rotation": 90, "cullface": "east"},
				"west":  { "texture": "#side", "rotation": 90, "cullface": "west"}
			}
		}
	]
})
editBM("wanderlust:templates/beam.json", {
	"parent": "minecraft:block/cube_all",
	"textures": {
		"particle": "#end"
	},
	"elements": [
		{
			"from": [ 0, 0, 0 ],
			"to": [ 16, 16, 16 ],
			"faces": {
				"down":  { "texture": "#end", "cullface": "down"},
				"up":    { "texture": "#end", "cullface": "up"},
				"north": { "texture": "#side", "cullface": "north"},
				"south": { "texture": "#side", "cullface": "south"},
				"east":  { "texture": "#side", "cullface": "east"},
				"west":  { "texture": "#side", "cullface": "west"}
			}
		}
	]
})

// ====================== Wooden Beams ======================
editBS("everycomp:abnww/gardens_of_the_dead/soulblight_boards.json", {
  "variants": {
    "axis=x": {
      "model": "everycomp:block/abnww/gardens_of_the_dead/soulblight_boards_x"
    },
    "axis=y": {
      "model": "everycomp:block/abnww/gardens_of_the_dead/soulblight_boards"
    },
    "axis=z": {
      "model": "everycomp:block/abnww/gardens_of_the_dead/soulblight_boards_z"
    }
  }
})
editBM("everycomp:abnww/gardens_of_the_dead/soulblight_boards.json", {
    "parent": "wanderlust:block/templates/beam",
    "textures": {
        "side": "everycomp:block/abnww/gardens_of_the_dead/soulblight_boards",
        "end": "everycomp:block/abnww/gardens_of_the_dead/soulblight_boards_top"
    }
})
editBM("everycomp:abnww/gardens_of_the_dead/soulblight_boards_x.json", {
    "parent": "wanderlust:block/templates/beam_horizontal_x",
    "textures": {
        "side": "everycomp:block/abnww/gardens_of_the_dead/soulblight_boards",
        "end": "everycomp:block/abnww/gardens_of_the_dead/soulblight_boards_top"
    }
})
editBM("everycomp:abnww/gardens_of_the_dead/soulblight_boards_z.json", {
    "parent": "wanderlust:block/templates/beam_horizontal_z",
    "textures": {
        "side": "everycomp:block/abnww/gardens_of_the_dead/soulblight_boards",
        "end": "everycomp:block/abnww/gardens_of_the_dead/soulblight_boards_top"
    }
})