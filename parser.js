/*
手动排除列表
*/
const ItemIgnoreList = ["lava","water","air","lodestone_compass"];
// 纯方块或者是give无效id
function getItems(lang) {
    var result = [];
    // let lastBlockId = "";
    for (var i in lang) {
        if (i.substring(0, "item.minecraft.".length) == "item.minecraft.") {
            let id = i.substring("item.minecraft.".length);
            if (id.search(/\./) != -1) {
                // if(id.search("\.des"))
                // console.log(id)
                continue;
            }
            let name = lang[i];
            let des = lang[i + ".desc"];
            if(ItemIgnoreList.indexOf(id)!=-1){
                continue;
            }
            if (des != undefined) {
                result[result.length] = { id: id, name: name + " - " + des };
            } else {
                result[result.length] = { id: id, name: name };
            }
            // console.log(name);
        } else if (i.substring(0, "block.minecraft.".length) == "block.minecraft.") {
            let id = i.substring("block.minecraft.".length);
            if (id.search(/\./) != -1) {
                // if(id.search("\.des"))
                // console.log(id)
                continue;
            }
            /*
            手动排除列表
            */
            if(ItemIgnoreList.indexOf(id)!=-1){
                continue;
            }
            let name = lang[i];
            let des = lang[i + ".desc"];

            if (des != undefined) {
                result[result.length] = { id: id, name: name + " - " + des };
            } else {
                result[result.length] = { id: id, name: name };
            }
            // console.log(name);
        }
    }
    return result;
}
function getBlocks(lang) {
    var result = [];
    for (var i in lang) {
        if (i.substring(0, "block.minecraft.".length) == "block.minecraft.") {
            let id = i.substring("block.minecraft.".length);
            if (id.search(/\./) != -1) {
                // if(id.search("\.des"))
                // console.log(id)
                continue;
            }
            let name = lang[i];
            let des = lang[i + ".desc"];

            if (des != undefined) {
                result[result.length] = { id: id, name: name + " - " + des };
            } else {
                result[result.length] = { id: id, name: name };
            }
            // console.log(name);
        }
    }
    return result;
}
function getEntities(lang) {
    var result = [];
    for (var i in lang) {
        if (i.substring(0, "entity.minecraft.".length) == "entity.minecraft.") {
            let id = i.substring("entity.minecraft.".length);
            if (id.search(/\./) != -1) {
                // if(id.search("\.des"))
                // console.log(id)
                continue;
            }
            let name = lang[i];
            let des = lang[i + ".desc"];

            if (des != undefined) {
                result[result.length] = { id: id, name: name + " - " + des };
            } else {
                result[result.length] = { id: id, name: name };
            }
            // console.log(name);
        }
    }
    return result;
}