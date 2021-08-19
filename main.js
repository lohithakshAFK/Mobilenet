Webcam.set({
    height:300,
    width:300,
    img_format:"png",
    png_quality:90,
    constrains:{
        facingMode:"environment"
    }
});
webcam = document.getElementById("camera");
Webcam.attach("camera");

function snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("output").innerHTML = '<img src='+data_uri+' id="result_img">';
    })
};

console.log(ml5.version + ": ml5 version");
classify = ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function check(){
    img = document.getElementById("result_img");
    classify.classify(img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("object_name").innerHTML = result[0].label;
    }
}