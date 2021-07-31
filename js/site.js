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
    document.getElementById("meleeProngSettingFee").value = "";
    document.getElementById("meleeChannelBezelSettingFee").value = "";
    document.getElementById("meleeFlatSettingFee").value = "";
    document.getElementById("rhodiumPlatingFee").value = "";
    document.getElementById("ringScanFee").value = "";
    document.getElementById("stoneScanFee").value = "";
}
// use config settings
function useSettingsConfig(){
    toggleConfig();
}
// toggle melee pricing options
function toggleMeleePricing(){
    if (document.getElementById("meleeDiamondPricingGuide").classList.contains("invisible")){
        document.getElementById("meleeDiamondPricingGuide").classList.remove("invisible");
    } else {
        document.getElementById("meleeDiamondPricingGuide").classList.add("invisible");
    }
}
// toggle melee pricing options
function toggleCustomerGold(){
    alert("You clicked to show customer gold pricing!");
}
// reset the form
function resetForm(){
    // hide results section
    document.getElementById("alert").classList.add("invisible");
    // set all inputs to empty strings ready for the next quote
    document.getElementById("metalSpotPrice").value = "";
    document.getElementById("metalWeight").value = "";
    document.getElementById("numberOfPieces").value = "";
    document.getElementById("numberMeleeStones").value = "";
    document.getElementById("centerStoneWeight").value = "";
    document.getElementById("numberLargeAccents").value = "";
    document.getElementById("assemblyFees").value = "";
    document.getElementById("accentsWeightEach").value = "";
    document.getElementById("partsCost").value = "";
    document.getElementById("meleePrice").value = "";
    document.getElementById("accentsPrice").value = "";
    document.getElementById("centerPrice").value = "";
}
// use melee pricing guide to calculate melee price
// not done
function calculateMeleePrice(){
    // get numbers of stones
    // If user doesn't enter a value, then use the placeholder value
    let meleePriceGuideNumMeleeStones1 = parseFloat(0);
    if(document.getElementById("meleePriceGuideNumMeleeStones1").value == ""){
        meleePriceGuideNumMeleeStones1 = parseFloat(document.getElementById("meleePriceGuideNumMeleeStones1").placeholder);
    } else{
        meleePriceGuideNumMeleeStones1 = parseFloat(document.getElementById("meleePriceGuideNumMeleeStones1").value);
    }
    // If user doesn't enter a value, then use the placeholder value
    let meleePriceGuideNumMeleeStones2 = parseFloat(0);
    if(document.getElementById("meleePriceGuideNumMeleeStones2").value == ""){
        meleePriceGuideNumMeleeStones2 = parseFloat(document.getElementById("meleePriceGuideNumMeleeStones2").placeholder);
    } else{
        meleePriceGuideNumMeleeStones2 = parseFloat(document.getElementById("meleePriceGuideNumMeleeStones2").value);
    }
    // calculate total number of melee stones, and stick this number into a hidden html element for later
    let totalNumberMeleeStonesFromPricingGuide = parseFloat(meleePriceGuideNumMeleeStones1 + meleePriceGuideNumMeleeStones2);
    document.getElementById("totalNumberMeleeStonesFromPricingGuide").innerHTML = totalNumberMeleeStonesFromPricingGuide;
    
    // get stone diameters
    let stonesDiameter1 = parseFloat(document.getElementById("meleeDiameterSelection1").value);
    let stonesDiameter2 = parseFloat(document.getElementById("meleeDiameterSelection2").value);
    
    // set carat weight each based on selected diameter
    let caratWeightEach1 = parseFloat(0);
    let caratWeightEach2 = parseFloat(0);

    switch (stonesDiameter1) {
        case 0.9:
            caratWeightEach1 = parseFloat(0.004);
            break;
        case 1.0:
            caratWeightEach1 = parseFloat(0.005);
            break;
        case 1.1:
            caratWeightEach1 = parseFloat(0.0065);
            break;
        case 1.2:
            caratWeightEach1 = parseFloat(0.0075);
            break;
        case 1.3:
            caratWeightEach1 = parseFloat(0.01);
            break;
        case 1.4:
            caratWeightEach1 = parseFloat(0.0125);
            break;
        case 1.5:
            caratWeightEach1 = parseFloat(0.015);
            break;
        case 1.75:
            caratWeightEach1 = parseFloat(0.02);
            break;
        case 1.8:
            caratWeightEach1 = parseFloat(0.025);
            break;
        case 2.0:
            caratWeightEach1 = parseFloat(0.03);
            break;
        case 2.2:
            caratWeightEach1 = parseFloat(0.04);
            break;
        case 2.4:
            caratWeightEach1 = parseFloat(0.05);
            break;
        case 2.5:
            caratWeightEach1 = parseFloat(0.06);
            break;
        case 2.7:
            caratWeightEach1 = parseFloat(0.07);
            break;
        case 2.8:
            caratWeightEach1 = parseFloat(0.08);
            break;
        case 3.0:
            caratWeightEach1 = parseFloat(0.10);
            break;
        case 3.2:
            caratWeightEach1 = parseFloat(0.12);
            break;
        default:
            break;
    }
    switch (stonesDiameter2) {
        case 0.9:
            caratWeightEach2 = parseFloat(0.004);
            break;
        case 1.0:
            caratWeightEach2 = parseFloat(0.005);
            break;
        case 1.1:
            caratWeightEach2 = parseFloat(0.0065);
            break;
        case 1.2:
            caratWeightEach2 = parseFloat(0.0075);
            break;
        case 1.3:
            caratWeightEach2 = parseFloat(0.01);
            break;
        case 1.4:
            caratWeightEach2 = parseFloat(0.0125);
            break;
        case 1.5:
            caratWeightEach2 = parseFloat(0.015);
            break;
        case 1.75:
            caratWeightEach2 = parseFloat(0.02);
            break;
        case 1.8:
            caratWeightEach2 = parseFloat(0.025);
            break;
        case 2.0:
            caratWeightEach2 = parseFloat(0.03);
            break;
        case 2.2:
            caratWeightEach2 = parseFloat(0.04);
            break;
        case 2.4:
            caratWeightEach2 = parseFloat(0.05);
            break;
        case 2.5:
            caratWeightEach2 = parseFloat(0.06);
            break;
        case 2.7:
            caratWeightEach2 = parseFloat(0.07);
            break;
        case 2.8:
            caratWeightEach2 = parseFloat(0.08);
            break;
        case 3.0:
            caratWeightEach2 = parseFloat(0.10);
            break;
        case 3.2:
            caratWeightEach2 = parseFloat(0.12);
            break;
        default:
            break;
    }
    // calculate total carat weight for options
    let meleeOptionOneTotalCaratWeight = parseFloat(meleePriceGuideNumMeleeStones1 * caratWeightEach1);
    let meleeOptionTwoTotalCaratWeight = parseFloat(meleePriceGuideNumMeleeStones2 * caratWeightEach2);
    let meleeTotalCaratWeight = (meleeOptionOneTotalCaratWeight + meleeOptionTwoTotalCaratWeight);
    // get stone qualities
    let meleeQualitySelection1 = document.getElementById("meleeQualitySelection1").value;
    let meleeQualitySelection2 = document.getElementById("meleeQualitySelection2").value;
    let pricePerCaratOption1 = parseFloat(0);
    let pricePerCaratOption2 = parseFloat(0);
    switch (meleeQualitySelection1) {
        case "I1-SI2 Clarity G Color":
            if (stonesDiameter1 >= 0.9 && stonesDiameter1 <= 1.2){
                pricePerCaratOption1 = parseFloat();
            } else if (stonesDiameter1 >= 1.3 && stonesDiameter1 <= 2.0) {
                pricePerCaratOption1 = parseFloat(1455);
            } else if (stonesDiameter1 >= 2.2 && stonesDiameter1 <= 2.7) {
                pricePerCaratOption1 = parseFloat();
            } else if (stonesDiameter1 >= 2.8 && stonesDiameter1 <= 3.2) {
                pricePerCaratOption1 = parseFloat();
            }
            break;
        case "SI1 Clarity G-H Color":
            if (stonesDiameter1 >= 0.9 && stonesDiameter1 <= 1.2){
                pricePerCaratOption1 = parseFloat();
            } else if (stonesDiameter1 >= 1.3 && stonesDiameter1 <= 2.0) {
                pricePerCaratOption1 = parseFloat();
            } else if (stonesDiameter1 >= 2.2 && stonesDiameter1 <= 2.7) {
                pricePerCaratOption1 = parseFloat();
            } else if (stonesDiameter1 >= 2.8 && stonesDiameter1 <= 3.2) {
                pricePerCaratOption1 = parseFloat();
            }
            break;
        case "VS Clarity F Color":
            if (stonesDiameter1 >= 0.9 && stonesDiameter1 <= 1.2){
                pricePerCaratOption1 = parseFloat();
            } else if (stonesDiameter1 >= 1.3 && stonesDiameter1 <= 2.0) {
                pricePerCaratOption1 = parseFloat();
            } else if (stonesDiameter1 >= 2.2 && stonesDiameter1 <= 2.7) {
                pricePerCaratOption1 = parseFloat();
            } else if (stonesDiameter1 >= 2.8 && stonesDiameter1 <= 3.2) {
                pricePerCaratOption1 = parseFloat();
            }
            break;
        case "Lab Grown (CVD VS/ F)":
            if (stonesDiameter2 >= 0.9 && stonesDiameter2 <= 1.2){
                pricePerCaratOption2 = parseFloat();
            } else if (stonesDiameter2 >= 1.3 && stonesDiameter2 <= 2.0) {
                pricePerCaratOption2 = parseFloat();
            } else if (stonesDiameter2 >= 2.2 && stonesDiameter2 <= 2.7) {
                pricePerCaratOption2 = parseFloat();
            } else if (stonesDiameter2 >= 2.8 && stonesDiameter2 <= 3.2) {
                pricePerCaratOption2 = parseFloat();
            }
            break;
        default:
            break;
    }
    switch (meleeQualitySelection2) {
        case "I1-SI2 Clarity G Color":
            if (stonesDiameter2 >= 0.9 && stonesDiameter2 <= 1.2){
                pricePerCaratOption2 = parseFloat();
            } else if (stonesDiameter2 >= 1.3 && stonesDiameter2 <= 2.0) {
                pricePerCaratOption2 = parseFloat(1455);
            } else if (stonesDiameter2 >= 2.2 && stonesDiameter2 <= 2.7) {
                pricePerCaratOption2 = parseFloat();
            } else if (stonesDiameter2 >= 2.8 && stonesDiameter2 <= 3.2) {
                pricePerCaratOption2 = parseFloat();
            }
            break;
        case "SI1 Clarity G-H Color":
            if (stonesDiameter2 >= 0.9 && stonesDiameter2 <= 1.2){
                pricePerCaratOption2 = parseFloat();
            } else if (stonesDiameter2 >= 1.3 && stonesDiameter2 <= 2.0) {
                pricePerCaratOption2 = parseFloat();
            } else if (stonesDiameter2 >= 2.2 && stonesDiameter2 <= 2.7) {
                pricePerCaratOption2 = parseFloat();
            } else if (stonesDiameter2 >= 2.8 && stonesDiameter2 <= 3.2) {
                pricePerCaratOption2 = parseFloat();
            }
            break;
        case "VS Clarity F Color":
            if (stonesDiameter2 >= 0.9 && stonesDiameter2 <= 1.2){
                pricePerCaratOption2 = parseFloat();
            } else if (stonesDiameter2 >= 1.3 && stonesDiameter2 <= 2.0) {
                pricePerCaratOption2 = parseFloat();
            } else if (stonesDiameter2 >= 2.2 && stonesDiameter2 <= 2.7) {
                pricePerCaratOption2 = parseFloat();
            } else if (stonesDiameter2 >= 2.8 && stonesDiameter2 <= 3.2) {
                pricePerCaratOption2 = parseFloat();
            }
            break;
        case "Lab Grown (CVD VS/ F)":
            if (stonesDiameter2 >= 0.9 && stonesDiameter2 <= 1.2){
                pricePerCaratOption2 = parseFloat();
            } else if (stonesDiameter2 >= 1.3 && stonesDiameter2 <= 2.0) {
                pricePerCaratOption2 = parseFloat();
            } else if (stonesDiameter2 >= 2.2 && stonesDiameter2 <= 2.7) {
                pricePerCaratOption2 = parseFloat();
            } else if (stonesDiameter2 >= 2.8 && stonesDiameter2 <= 3.2) {
                pricePerCaratOption2 = parseFloat();
            }
            break;
        default:
            break;
    }

    // calculate each stone option's price
    let meleeOptionOneTotalPrice = parseFloat(Math.ceil(meleeOptionOneTotalCaratWeight * pricePerCaratOption1));
    let meleeOptionTwoTotalPrice = parseFloat(Math.ceil(meleeOptionTwoTotalCaratWeight * pricePerCaratOption2));
    // calculate total stone price and weight
    let meleeTotalCalculatedPrice = parseFloat(meleeOptionOneTotalPrice + meleeOptionTwoTotalPrice);

    // put values inside html
    document.getElementById("stoneOption1TotalWeight").innerHTML = `Weight: ${meleeOptionOneTotalCaratWeight}ctw`;
    document.getElementById("stoneOption1TotalPrice").innerHTML = `Price: ${meleeOptionOneTotalPrice}`;
    document.getElementById("stoneOption2TotalWeight").innerHTML = `Weight: ${meleeOptionTwoTotalCaratWeight}ctw`;
    document.getElementById("stoneOption2TotalPrice").innerHTML = `Price: ${meleeOptionTwoTotalPrice}`;
    
    document.getElementById("totalWeightMeleePricingGuide").innerHTML = meleeTotalCaratWeight;
    document.getElementById("totalPriceMeleePricingGuide").innerHTML = meleeTotalCalculatedPrice;
}

// inject calculated melee price into input for melee stones
function useMeleePrice(){
    let meleePriceString = document.getElementById("totalPriceMeleePricingGuide").textContent;
    let meleeTotalCalculatedPrice = parseFloat(meleePriceString);
    document.getElementById("meleePrice").value = meleeTotalCalculatedPrice;
    
    let numberMeleeStones = parseFloat(document.getElementById("totalNumberMeleeStonesFromPricingGuide").innerHTML);
    document.getElementById("numberMeleeStones").value = numberMeleeStones;
}

// === Actual App Logic Starts Here === //
// get values from form inputs
function getValues(){
    
    let mountCost = parseFloat(calculateMounting());

    let totalStonesCost = parseFloat(calculateStonesCost());

    displayResults(mountCost, totalStonesCost);
}

// calculations
function calculateMounting(){
    // create an object for storing all our prices neatly
    let mountCost = {};
    mountCost.rhodiumPlatingFee  = calculateRhodiumPlatingFee();
    mountCost.metalCost = parseFloat(calculateMetalCost());
    mountCost.settingFee = calculateSettingFee();
    mountCost.printingFee = calculatePrintingFee();
    mountCost.designFee = parseFloat(document.getElementById("designType").value);
    mountCost.customerStonesFee = parseFloat(document.getElementById("customerStonesFee").value);
    mountCost.boxFee = parseFloat(7);

    // If user doesn't enter a value, then use the placeholder value
    let ringScanFee = parseFloat(0);
    if(document.getElementById("ringScanFee").value == ""){
        ringScanFee = parseFloat(document.getElementById("ringScanFee").placeholder);
    } else{
        ringScanFee = parseFloat(document.getElementById("ringScanFee").value);
    }
    // If user doesn't enter a value, then use the placeholder value
    let stoneScanFee = parseFloat(0);
    if(document.getElementById("stoneScanFee").value == ""){
        stoneScanFee = parseFloat(document.getElementById("stoneScanFee").placeholder);
    } else{
        stoneScanFee = parseFloat(document.getElementById("stoneScanFee").value);
    }

    let scanFee = parseFloat(0);
    if (document.getElementById("scanSelection").value == "Scan Ring & Stone"){
        scanFee = ringScanFee + stoneScanFee;
    } else if (document.getElementById("scanSelection").value == "Scan Ring"){
        scanFee = ringScanFee;
    } else if (document.getElementById("scanSelection").value == "Scan Stone"){
        scanFee = stoneScanFee;
    }
    
    
    mountCost.scanFee = parseFloat(scanFee);


    // If user doesn't enter a value, then use the placeholder value
    let assemblyFee = parseFloat(0);
    if(document.getElementById("assemblyFees").value == ""){
        assemblyFee = parseFloat(document.getElementById("assemblyFees").placeholder);
    } else{
        assemblyFee = parseFloat(document.getElementById("assemblyFees").value);
    }
    mountCost.assemblyFee = parseFloat(assemblyFee);

    let partsCost = parseFloat(0);
    if(document.getElementById("partsCost").value == ""){
        partsCost = parseFloat(document.getElementById("partsCost").placeholder);
    } else{
        partsCost = parseFloat(document.getElementById("partsCost").value);
    }
    mountCost.partsCost = parseFloat(partsCost);
    
    totalMountingCost = parseFloat(
        mountCost.rhodiumPlatingFee + 
        mountCost.metalCost + 
        mountCost.settingFee + 
        mountCost.printingFee + 
        mountCost.designFee + 
        mountCost.customerStonesFee + 
        mountCost.scanFee + 
        mountCost.assemblyFee + 
        mountCost.partsCost + 
        mountCost.boxFee
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

    let metalSpotPrice = parseFloat(0);
    if(document.getElementById("metalSpotPrice").value == ""){
        metalSpotPrice = parseFloat(document.getElementById("metalSpotPrice").placeholder);
    } else{
        metalSpotPrice = parseFloat(document.getElementById("metalSpotPrice").value);
    }

    let metalWeight = parseFloat(0);
    if(document.getElementById("metalWeight").value == ""){
        metalWeight = parseFloat(document.getElementById("metalWeight").placeholder);
    } else{
        metalWeight = parseFloat(document.getElementById("metalWeight").value);
    }

    let numberOfPieces = parseFloat(0);
    if(document.getElementById("numberOfPieces").value == ""){
        numberOfPieces = parseFloat(document.getElementById("numberOfPieces").placeholder);
    } else{
        numberOfPieces = parseFloat(document.getElementById("numberOfPieces").value);
    }

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
    // If user does not enter a value, then use the placeholder value
    let numberOfPieces = parseFloat(0);
    if(document.getElementById("numberOfPieces").value == ""){
        numberOfPieces = parseFloat(document.getElementById("numberOfPieces").placeholder);
    } else{
        numberOfPieces = parseFloat(document.getElementById("numberOfPieces").value);
    }

    // If user doesn't enter a value, then use the placeholder value
    let individualRhodiumPlatingFee = parseFloat(0);
    if(document.getElementById("rhodiumPlatingFee").value == ""){
        individualRhodiumPlatingFee = parseFloat(document.getElementById("rhodiumPlatingFee").placeholder);
    } else{
        individualRhodiumPlatingFee = parseFloat(document.getElementById("rhodiumPlatingFee").value);
    }

    let totalRhodiumPlatingFee = parseFloat(0);
    
    // We want to charge if the metal is white gold
    if (metalSelection == "10k White Gold" || metalSelection == "14k White Gold" || metalSelection == "18k White Gold")
    {
        totalRhodiumPlatingFee =  parseFloat(individualRhodiumPlatingFee*numberOfPieces);
    }
    return totalRhodiumPlatingFee;
}
function calculateSettingFee(){
    // If user does not enter a value, then use the placeholder value
    let meleeProngSettingFee = parseFloat(0);
    if(document.getElementById("meleeProngSettingFee").value == ""){
        meleeProngSettingFee = parseFloat(document.getElementById("meleeProngSettingFee").placeholder);
    } else{
        meleeProngSettingFee = parseFloat(document.getElementById("meleeProngSettingFee").value);
    }
    // If user does not enter a value, then use the placeholder value
    let meleeChannelBezelSettingFee = parseFloat(0);
    if(document.getElementById("meleeChannelBezelSettingFee").value == ""){
        meleeChannelBezelSettingFee = parseFloat(document.getElementById("meleeChannelBezelSettingFee").placeholder);
    } else{
        meleeChannelBezelSettingFee = parseFloat(document.getElementById("meleeChannelBezelSettingFee").value);
    }
    // If user does not enter a value, then use the placeholder value
    let meleeFlatSettingFee = parseFloat(0);
    if(document.getElementById("meleeFlatSettingFee").value == ""){
        meleeFlatSettingFee = parseFloat(document.getElementById("meleeFlatSettingFee").placeholder);
    } else{
        meleeFlatSettingFee = parseFloat(document.getElementById("meleeFlatSettingFee").value);
    }

    // If user does not enter a value, then use the placeholder value
    let numberOfMeleeStones = parseFloat(0);
    if(document.getElementById("numberMeleeStones").value == ""){
        numberOfMeleeStones = parseFloat(document.getElementById("numberMeleeStones").placeholder);
    } else{
        numberOfMeleeStones = parseFloat(document.getElementById("numberMeleeStones").value);
    }

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

    meleeSettingFee = parseFloat(numberOfMeleeStones * meleeSettingChargePerStone);

    // Calculate setting fees for any larger accent stones
    // If users do not enter a value, then use the placeholder value
    let numberAccentStones = parseFloat(0);
    if(document.getElementById("numberLargeAccents").value == ""){
        numberAccentStones = parseFloat(document.getElementById("numberLargeAccents").placeholder);
    } else{
        numberAccentStones = parseFloat(document.getElementById("numberLargeAccents").value);
    }
    let accentStonesWeightEach = parseFloat(0);
    if(document.getElementById("accentsWeightEach").value == ""){
        accentStonesWeightEach = parseFloat(document.getElementById("accentsWeightEach").placeholder);
    } else{
        accentStonesWeightEach = parseFloat(document.getElementById("accentsWeightEach").value);
    }

    let accentSettingFeeEach = parseFloat(0);

    if (accentStonesWeightEach <= 0.15)
    {
        accentSettingFeeEach = parseFloat(meleeProngSettingFee);
    }
    else if (accentStonesWeightEach > 0.15 && accentStonesWeightEach <= 0.25)
    {
        accentSettingFeeEach = parseFloat(meleeChannelBezelSettingFee);
    }
    else if (accentStonesWeightEach > 0.25 && accentStonesWeightEach <= 0.55)
    {
        accentSettingFeeEach = parseFloat(22);
    }
    else if (accentStonesWeightEach > 0.55 && accentStonesWeightEach <= 0.75)
    {
        accentSettingFeeEach = parseFloat(30);
    }
    else if (accentStonesWeightEach > 0.75 && accentStonesWeightEach <= 1.00)
    {
        accentSettingFeeEach = parseFloat(50);
    }
    else if (accentStonesWeightEach > 1.00 && accentStonesWeightEach <= 1.50)
    {
        accentSettingFeeEach = parseFloat(60);
    }
    else if (accentStonesWeightEach > 1.50 && accentStonesWeightEach <= 2.00)
    {
        accentSettingFeeEach = parseFloat(70);
    }
    else if (accentStonesWeightEach > 2.00 && accentStonesWeightEach <= 3.00)
    {
        accentSettingFeeEach = parseFloat(80);
    }
    else if (accentStonesWeightEach > 3.00 && accentStonesWeightEach <= 4.00)
    {
        accentSettingFeeEach = parseFloat(100);
    }
    else if (accentStonesWeightEach > 4.00 && accentStonesWeightEach <= 5.00)
    {
        accentSettingFeeEach = parseFloat(110);
    }
    else if (accentStonesWeightEach > 5.00)
    {
        accentSettingFeeEach = parseFloat(140);
    }

    accentSettingFee = parseFloat(numberAccentStones * accentSettingFeeEach);

    // Calculate center setting fee
    // If users do not enter a value, then use the placeholder value
    let centerStoneWeight = parseFloat(0);
    if(document.getElementById("centerStoneWeight").value == ""){
        centerStoneWeight = parseFloat(document.getElementById("centerStoneWeight").placeholder);
    } else{
        centerStoneWeight = parseFloat(document.getElementById("centerStoneWeight").value);
    }

    if (centerStoneWeight <= 0.15)
    {
        centerSettingFee = parseFloat(meleeProngSettingFee);
    }
    else if (centerStoneWeight > 0.15 && centerStoneWeight <= 0.25)
    {
        centerSettingFee = parseFloat(meleeChannelBezelSettingFee);
    }
    else if (centerStoneWeight > 0.25 && centerStoneWeight <= 0.55)
    {
        centerSettingFee = parseFloat(22);
    }
    else if (centerStoneWeight > 0.55 && centerStoneWeight <= 0.75)
    {
        centerSettingFee = parseFloat(30);
    }
    else if (centerStoneWeight > 0.75 && centerStoneWeight <= 1.00)
    {
        centerSettingFee = parseFloat(50);
    }
    else if (centerStoneWeight > 1.00 && centerStoneWeight <= 1.50)
    {
        centerSettingFee = parseFloat(60);
    }
    else if (centerStoneWeight > 1.50 && centerStoneWeight <= 2.00)
    {
        centerSettingFee = parseFloat(70);
    }
    else if (centerStoneWeight > 2.00 && centerStoneWeight <= 3.00)
    {
        centerSettingFee = parseFloat(80);
    }
    else if (centerStoneWeight > 3.00 && centerStoneWeight <= 4.00)
    {
        centerSettingFee = parseFloat(100);
    }
    else if (centerStoneWeight > 4.00 && centerStoneWeight <= 5.00)
    {
        centerSettingFee = parseFloat(110);
    }
    else if (centerStoneWeight > 5.00)
    {
        centerSettingFee = parseFloat(140);
    }
    else
    {
        centerSettingFee = parseFloat(0);
    }

    totalSettingFee = parseFloat(meleeSettingFee + accentSettingFee + centerSettingFee);

    return parseFloat(totalSettingFee);
}
function calculatePrintingFee(){
    let printingFee = parseFloat(0);
    // If user does not enter a value, then use the placeholder value
    let numberOfPieces = parseFloat(0);
    if(document.getElementById("numberOfPieces").value == ""){
        numberOfPieces = parseFloat(document.getElementById("numberOfPieces").placeholder);
    } else{
        numberOfPieces = parseFloat(document.getElementById("numberOfPieces").value);
    }

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
function calculateStonesCost(){

    let meleePrice = parseFloat(0);
    let accentsPrice = parseFloat(0);
    let centerPrice = parseFloat(0);
    
    // If user doesn't enter a value, then use the placeholder value
    if(document.getElementById("meleePrice").value == ""){
        meleePrice = parseFloat(document.getElementById("meleePrice").placeholder);
    } else{
        meleePrice = parseFloat(document.getElementById("meleePrice").value);
    }
    if(document.getElementById("accentsPrice").value == ""){
        accentsPrice = parseFloat(document.getElementById("accentsPrice").placeholder);
    } else{
        accentsPrice = parseFloat(document.getElementById("accentsPrice").value);
    }
    if(document.getElementById("centerPrice").value == ""){
        centerPrice = parseFloat(document.getElementById("centerPrice").placeholder);
    } else{
        centerPrice = parseFloat(document.getElementById("centerPrice").value);
    }

    let totalStonesCost = parseFloat(meleePrice + accentsPrice + centerPrice);

    return totalStonesCost;
}

// display results
function displayResults(mountCost, stonesCost){
    document.getElementById("alert").classList.remove("invisible");
    document.getElementById("mountTotal").innerHTML = mountCost;
    document.getElementById("stonesTotal").innerHTML = stonesCost;
    document.getElementById("quoteTotal").innerHTML = mountCost + stonesCost;
}