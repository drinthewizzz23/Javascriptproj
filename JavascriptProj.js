
const TKNS = []

function mintNFT(name, eyeColor, shirtType, accessories) {
    const NFT = {
        "name":  name,
        "eyecolor": eyeColor,
        "shirtType": shirtType,
        "accessories": accessories
    }
    TKNS.push (NFT);
    console.log ("Minted: " + name);
}


function listTKNS() {
    for(let i = 0; i < TKNS.length; i++){
        console.log("\nID \t\t\t\t" + (i + 1));
        console.log("\nName: \t\t\t" + TKNS[i].name);
        console.log("Eye Color: \t\t" + TKNS[i].eyecolor);
        console.log("Shirt Type: \t" + TKNS[i].shirtType);
        console.log("Accessories: \t" + TKNS[i].accessories);
    }

}


function getTotalSupply () {
    console.log("\nTotal Number Of NFTs Minted: " + TKNS.length)
    
}


mintNFT ("Trev", "Green", "Tank Top", "Choker");
mintNFT ("Frank", "Brown", "Sweatshirt", "Gold Chains");
mintNFT ("Mike", "Blue", "Suit", "Diamond Necklace");
mintNFT ("Jordan", "Brown", "Shirt", "Ring");
mintNFT ("Tristan", "Green", "Croptop", "Wrist Watch");
listTKNS();
getTotalSupply();