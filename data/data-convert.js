const csv=require('csvtojson'); // https://www.npmjs.com/package/csvtojson
const fs=require('fs');

let files = [
    "quick-ref-alcohol"
]

files.forEach(file => {
    let readStream=fs.createReadStream(`${file}.csv`);
    let writeStream=fs.createWriteStream(`${file}.json`);

    readStream.pipe(csv({
        trim: true,
        downstreamFormat: "array"
    })).pipe(writeStream);
});