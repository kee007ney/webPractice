const textIn = document.querySelector(".lg-txt-in");
const textOut = document.querySelector(".lg-txt-out");
const formatButton = document.querySelector(".btn-format");
const stringButton = document.querySelector(".btn-stringify");
const exampleButton = document.querySelector(".btn-example");

formatButton.addEventListener("click", () => {
     const formatted = JSON.stringify(JSON.parse(textIn.value), null, 3);
     textOut.value = formatted;
//     console.log ("Formatted text!");
})

stringButton.addEventListener("click", () => {
     const stringified = JSON.stringify(JSON.parse(textIn.value));
     textOut.value = stringified;
})

exampleButton.addEventListener("click", () => {
     const example = "{\
          \"object_id\": \"https://portal.aws.biochemistry.gwu.edu/bco/BCO_000275/DRAFT\",\
          \"spec_version\": \"https://w3id.org/ieee/ieee-2791-schema/\",\
          \"etag\": \"ca34683b739b6c283adc89bd9bdcbaa5c5f1056037164a8b2934567955a60420\",\
          \"provenance_domain\": {\
              \"name\": \"WGS Simulation of DUF1220 Regions\"\
          }\
      }";
     textIn.value = example;
})

//const fruits = ['apple', 'banana', 'orange'];
//fruits.forEach (console.log(fruit, i));