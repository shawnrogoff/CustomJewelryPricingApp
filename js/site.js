// toggle config options
function toggleConfig(){
    if (document.getElementById("configMenu").classList.contains("invisible")){
        document.getElementById("configMenu").classList.remove("invisible");
    } else {
        document.getElementById("configMenu").classList.add("invisible");
    }
}
// reset config settings to default
function resetSettingsConfig(){
    document.getElementById("meleeProngSettingFee").value = 5;
    document.getElementById("meleeChannelBezelSettingFee").value = 8;
    document.getElementById("meleeFlatSettingFee").value = 10;
    document.getElementById("rhodiumPlatingFee").value = 35;
    document.getElementById("ringScanFee").value = 100;
    document.getElementById("stoneScanFee").value = 70;
}
// use config settings
function useSettingsConfig(){
    toggleConfig();
}
// toggle melee pricing options
function toggleMeleePricing(){
    alert("You clicked to show melee pricing!");
}
// toggle melee pricing options
function toggleCustomerGold(){
    alert("You clicked to show customer gold pricing!");
}
// reset the form
function resetForm(){
    document.getElementById("alert").classList.add("invisible");
}

// === Actual App Logic Starts Here === //
// get values from form inputs
function getValues(){
    
    let mountCost = parseFloat(calculateMounting());

    let stonesCost = parseFloat(0);

    displayResults(mountCost, stonesCost);
}

// calculate quote
function calculateMounting(){
    // create an object for storing all our prices neatly
    let mountCost = {};
    mountCost.rhodiumPlatingFee  = calculateRhodiumPlatingFee();
    mountCost.metalCost = parseFloat(calculateMetalCost());
    mountCost.settingFee = calculateSettingFee();
    mountCost.printingFee = calculatePrintingFee();
    mountCost.designFee = parseFloat(document.getElementById("designType").value);
    mountCost.customerStonesFee = parseFloat(document.getElementById("customerStonesFee").value);
    mountCost.scanFee = parseFloat(document.getElementById("scanSelection").value);
    mountCost.assemblyFee = parseFloat(document.getElementById("assemblyFees").value);
    mountCost.partsCost = parseFloat(document.getElementById("partsCost").value);
    mountCost.boxFee = parseFloat(7);

    totalMountingCost = parseFloat(
        mountCost.rhodiumPlatingFee.value + 
        mountCost.metalCost.value + 
        mountCost.settingFee.value + 
        mountCost.printingFee.value + 
        mountCost.designFee.value + 
        mountCost.customerStonesFee.value + 
        mountCost.scanFee.value + 
        mountCost.assemblyFee.value + 
        mountCost.partsCost.value + 
        mountCost.boxFee.value
        );

    return totalMountingCost;
}
function calculateMetalCost(){
    // Constants pertaining to metal pricing
    let feeLaborPerPiece = parseFloat(9);
    let feeFinishPerGram = parseFloat(8);
    let retailMarkupOnMetal = parseFloat(2);
    // Get values from the form
    let metalSelection = document.getElementById("metalSelection").value;
    let metalSpotPrice = parseFloat(document.getElementById("metalSpotPrice").value);
    let metalWeight = parseFloat(document.getElementById("metalWeight").value);
    let numberOfPieces = parseFloat(document.getElementById("numberOfPieces").value);

    let metalPerGramCost = parseFloat(0);

    // Calculate price per gram based on metalSelection and metalSpotPrice
    // per_gram_cost = math.ceil((spot_price * spot_multiplier_10k)+10)
    // spot_multiplier_10k = 0.0133961
    // spot_multiplier_14k = 0.0187546
    // spot_multiplier_18k = 0.0241131

    if (metalSelection == "10k White Gold" || metalSelection == "10k Yellow Gold" || metalSelection == "10k Rose Gold")
    {
        metalPerGramCost = parseFloat(Math.ceil((metalSpotPrice * 0.0133961) + 10));
    } 
    else if (metalSelection == "14k White Gold" || metalSelection == "14k Yellow Gold" || metalSelection == "14k Rose Gold")
    {
        metalPerGramCost = parseFloat(Math.ceil((metalSpotPrice * 0.0187546) + 10));
    }
    else if (metalSelection == "18k White Gold" || metalSelection == "18k Yellow Gold" || metalSelection == "18k Rose Gold")
    {
        metalPerGramCost = parseFloat(Math.ceil((metalSpotPrice * 0.0241131) + 10));
    }
    else if (metalSelection == "Platinum")
    {
        metalPerGramCost = parseFloat((Math.ceil((metalSpotPrice / 31.1035) + 25)));
    }
    else if (metalSelection == "Sterling Silver")
    {
        metalPerGramCost = parseFloat((Math.ceil((metalSpotPrice + 1.2) / 31.01034768) * 1.5));
    }

    let metalCost = parseFloat((((metalPerGramCost * metalWeight) + (feeLaborPerPiece * numberOfPieces) + (Math.ceil(metalWeight) * feeFinishPerGram)) * retailMarkupOnMetal));

    if (metalSelection == "Platinum")
    {
        metalCost = parseFloat(metalCost + 90);
    }

    return metalCost;
}
function calculateRhodiumPlatingFee(){
    let metalSelection = document.getElementById("metalSelection").value;
    let numberOfPieces = parseFloat(document.getElementById("numberOfPieces").value);
    let individualRhodiumPlatingFee = parseFloat(document.getElementById("rhodiumPlatingFee").value);
    let totalRhodiumPlatingFee = parseFloat(0);
    // We want to charge if the metal is white gold
    if (metalSelection == "10k White Gold" || metalSelection == "14k White Gold" || metalSelection == "18k White Gold")
    {
        totalRhodiumPlatingFee =  parseFloat(individualRhodiumPlatingFee*numberOfPieces);
    }
    return totalRhodiumPlatingFee;
}
function calculateSettingFee(){
    let meleeProngSettingFee = parseFloat(document.getElementById("meleeProngSettingFee").value);
    let meleeChannelBezelSettingFee = parseFloat(document.getElementById("meleeChannelBezelSettingFee").value);
    let meleeFlatSettingFee = parseFloat(document.getElementById("meleeFlatSettingFee").value);
    let numberOfMeleeStones = parseFloat(document.getElementById("numberMeleeStones"));
    let meleeSettingChargePerStone = parseFloat(0);
    
    // Determine which value to use for melee stone pricing
    switch (document.getElementById("meleeSettingStyle").value) {
        case "prong":
            meleeSettingChargePerStone = parseFloat(meleeProngSettingFee);
            break;
        case "channel/bezel/bar":
            meleeSettingChargePerStone = parseFloat(meleeChannelBezelSettingFee);
            break;
        case "flat":
            meleeSettingChargePerStone = parseFloat(meleeFlatSettingFee);
            break;
        default:
            break;
    }
    
    let meleeSettingFee = parseFloat(0);
    let accentSettingFee = parseFloat(0);
    let centerSettingFee = parseFloat(0);
    let totalSettingFee = parseFloat(0);

    meleeSettingFee = parseFloat(numberOfMeleeStones * meleeSettingChargePerSton);

    // Calculate setting fees for any larger accent stones

    let numberAccentStones = parseFloat(document.getElementById("numberLargeAccents").value);
    let accentStonesWeightEach = parseFloat(document.getElementById("accentsWeightEach").value);
    let accentSettingFeeEach = parseFloat(0);

    
// === check on javascript comparison operators and how they work === //
    if (accentStonesWeightEach <= 0.15)
    {
        accentSettingFeeEach = meleeProngSettingFee;
    }
    else if (accentStonesWeightEach > 0.15 && accentStonesWeightEach <= 0.25)
    {
        accentSettingFeeEach = meleeChannelBezelSettingFee;
    }
    else if (accentStonesWeightEach > 0.25 && accentStonesWeightEach <= 0.55)
    {
        accentSettingFeeEach = 22;
    }
    else if (accentStonesWeightEach > 0.55 && accentStonesWeightEach <= 0.75)
    {
        accentSettingFeeEach = 30;
    }
    else if (accentStonesWeightEach > 0.75 && accentStonesWeightEach <= 1.00)
    {
        accentSettingFeeEach = 50;
    }
    else if (accentStonesWeightEach > 1.00 && accentStonesWeightEach <= 1.50)
    {
        accentSettingFeeEach = 60;
    }
    else if (accentStonesWeightEach > 1.50 && accentStonesWeightEach <= 2.00)
    {
        accentSettingFeeEach = 70;
    }
    else if (accentStonesWeightEach > 2.00 && accentStonesWeightEach <= 3.00)
    {
        accentSettingFeeEach = 80;
    }
    else if (accentStonesWeightEach > 3.00 && accentStonesWeightEach <= 4.00)
    {
        accentSettingFeeEach = 100;
    }
    else if (accentStonesWeightEach > 4.00 && accentStonesWeightEach <= 5.00)
    {
        accentSettingFeeEach = 110;
    }
    else if (accentStonesWeightEach > 5.00)
    {
        accentSettingFeeEach = 140;
    }

    accentSettingFee = numberAccentStones * accentSettingFeeEach;

    // Calculate center setting fee

    let centerStoneWeight = parseFloat(document.getElementById("centerStoneWeight").value);

    if (centerStoneWeight <= 0.15)
    {
        centerSettingFee = meleeProngSettingFee;
    }
    else if (centerStoneWeight > 0.15 && centerStoneWeight <= 0.25)
    {
        centerSettingFee = meleeChannelBezelSettingFee;
    }
    else if (centerStoneWeight > 0.25 && centerStoneWeight <= 0.55)
    {
        centerSettingFee = 22;
    }
    else if (centerStoneWeight > 0.55 && centerStoneWeight <= 0.75)
    {
        centerSettingFee = 30;
    }
    else if (centerStoneWeight > 0.75 && centerStoneWeight <= 1.00)
    {
        centerSettingFee = 50;
    }
    else if (centerStoneWeight > 1.00 && centerStoneWeight <= 1.50)
    {
        centerSettingFee = 60;
    }
    else if (centerStoneWeight > 1.50 && centerStoneWeight <= 2.00)
    {
        centerSettingFee = 70;
    }
    else if (centerStoneWeight > 2.00 && centerStoneWeight <= 3.00)
    {
        centerSettingFee = 80;
    }
    else if (centerStoneWeight > 3.00 && centerStoneWeight <= 4.00)
    {
        centerSettingFee = 100;
    }
    else if (centerStoneWeight > 4.00 && centerStoneWeight <= 5.00)
    {
        centerSettingFee = 110;
    }
    else if (centerStoneWeight > 5.00)
    {
        centerSettingFee = 140;
    }
    else
    {
        centerSettingFee = 0;
    }

    totalSettingFee = meleeSettingFee + accentSettingFee + centerSettingFee;

    return totalSettingFee;
}
function calculatePrintingFee(){
    let printingFee = parseFloat(0);
    let numberOfPieces = parseFloat(document.getElementById("numberOfPieces").value);

    if (numberOfPieces == 1)
    {
        printingFee = 30;
    }
    else
    {
        printingFee = 30 + ((numberOfPieces - 1) * 15);
    }

    return printingFee;
}


// display results
function displayResults(mountCost, stonesCost){
    document.getElementById("alert").classList.remove("invisible");
    document.getElementById("mountTotal").innerHTML = mountCost;
    document.getElementById("stonesTotal").innerHTML = stonesCost;
    document.getElementById("quoteTotal").innerHTML = metalCost + stonesCost;
}